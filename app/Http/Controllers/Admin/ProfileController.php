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



    // check changePassword validation

   private function passwordCheckValitdation($request){

   $request->validate([
     'oldPassword' => 'required',
     'newPassword'  => 'required|min:6|max:15',
     'confirmPassword' => 'required|same:newPassword|min:6|max:15'
   ]);

   }




}
