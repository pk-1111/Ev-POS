<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use RealRashid\SweetAlert\Facades\Alert;

class ProfileController extends Controller
{
    // direct admin profile Page

    public function adminProfile(){

        return view('admin.profile.adminProfile');
    }

     // direct admin edit profile Page

    public function adminProfileEdit(){

        return view('admin.profile.adminProfileEdit');
    }

    // update profile

    public function adminProfileUpdate(Request $request){
        $this->adminProfileCheckValitdation($request);

        $profile_data = $this->requestProfileData($request);

        if($request->hasFile('image')){

             //delete old image

            if(Auth::user()->profile != null ){
            if(file_exists(public_path('profile/' . Auth::user()->profile))){
                unlink(public_path('profile/' . Auth::user()->profile)) ;
            }
        }

            // store new image
            $fileName = uniqid() . $request->file('image')->getClientOriginalName();
            $request->file('image')->move(public_path() . '/profile/',$fileName);

            $profile_data['profile'] = $fileName;
        } else {
            $profile_data = null;
        }

        User::where('id', Auth::user()->id)->update($profile_data);

          Alert::success('Profile Edit', 'Profile Edit Successfully...');


                 return to_route('adminProfile');


    }



    // direct change password page

    public function changePasswordPage(){


        return Inertia::render('Admin/Profile/ChangePassword');
    }


    // changePassword

    public function changePassword(Request $request){
        //   $this->passwordCheckValitdation($request);


        $currentLoginPassword = auth()->user()->password;

        if(Hash::check($request->oldPassword , $currentLoginPassword)){
            User::where('id',auth()->user()->id)->update([
                'password' => Hash::make($request->newPassword)
            ]);

             Alert::success('Password Change', 'Password Change Successfully...');


                 return to_route('adminHome');
        }else{
              Alert::success('Error Message', 'Old Password Do Not Match ! Try Again');


                 return back();
        }



    }



    // direct add new admin page


    public function addNewAdminPage(){
        return view ('admin.profile.addNewAdmin');
    }


     // create admin account

    public function newAdminCreate(Request $request){

    $this->checkNewAdminAccountValidation($request);

     $profile_data = $this->requestProfileData($request);

     $profile_data['role'] = 'admin';

     $profile_data['provider'] = 'simple';



    User::create($profile_data);

    Alert::success('Admin Account Create', 'Admin Account Created Successfully...');


                 return to_route('adminProfile');


    }




    // direct admin list


      public function adminListPage(Request $request){
        
       //searchKey

          $admin = User::select('id','name','email','phone','address','created_at','role','provider')
           ->whereIn('role',['admin','superadmin'])
           ->when(request('searchKey'),function($query){
            $query->whereAny(['name','email','phone','address','provider','role'] , 'like', '%'.request('searchKey').'%');

           })

            ->paginate(6);
        
        return view ('admin.profile.adminList',compact('admin'));
    }
    


    

    // create admin account

    public function createAdminAccount(Request $request){

    $this->checkNewAdminAccountValidation($request);

    $data = $this->requestAdminAccountData($request);


    User::create($data);

    Alert::success('Admin Account Create', 'Admin Account Created Successfully...');


                 return to_route('profile#accountProfile');


    }

   













      //      Private Function Zone     //


    //  request user profile data

    private function requestProfileData($request){
        return [
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'address' => $request->address,
        ];
    }


    // check changePassword validation

   private function passwordCheckValitdation($request){

   $request->validate([
     'oldPassword' => 'required',
     'newPassword'  => 'required|min:6|max:15',
     'confirmPassword' => 'required|same:newPassword|min:6|max:15'
   ]);

   }

   // check adminprofile validation

   private function adminProfileCheckValitdation($request){

   $request->validate([
     'name' => 'required',
     'email'  => 'required|unique:users,email,'.Auth::user()->id,
     'phone' => 'required|min:8|max:15|unique:users,phone,'.Auth::user()->id,
     'address' => 'required'
   ]);

   }


   // check newAdminAccount validation

    private function checkNewAdminAccountValidation($request) {
        $request->validate([

            'name' => 'required|min:5|max:20',
            'email' => 'required|unique:users,email,'.Auth::user()->id,
            'password' => 'required|min:6|max:15',
            'confirmPassword' => 'required|same:password|min:6|max:15',

        ],[
            'name'  => 'ကျေးဇူးပြူ၍ အမည် ထည့်သွင်းပါ',
            'email' => 'ကျေးဇူးပြူ၍  အီးမေးလိပ်စာ ထည့်သွင်းပါ' ,
            'phone' =>  'ကျေးဇူးပြူ၍  ဖုန်းနံပါတ် ထည့်သွင်းပါ' ,

        ],[
        ]);
    }



}
