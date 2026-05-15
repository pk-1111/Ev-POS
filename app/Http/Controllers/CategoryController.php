<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;
use RealRashid\SweetAlert\Facades\Alert;

class CategoryController extends Controller
{
    //admin category list page

    public function  categoryPage(){

      return Inertia::render('Admin/Category/Category',[
        'categories' => Category::all(),
      ]);

     
    }

    // admin create category

    public function createCategory(Request $request)
{
    $request->validate([
        'categoryName' => 'required|string|max:255',
    ]);

    
    Category::create([
        'title' => $request->categoryName,
    ]);

   
    return back()->with('success', 'Category created successfully!');
}



    // update Category Page

    public function editCategoryPage($id){
        $categoryUpdate = Category::where('category_id',$id)->first();
        return Inertia::render('Admin/Category/EditCategory',[
            'categories' => $categoryUpdate,
        ]);
    }

     // update Category

    public function editCategory($id,Request $request){

       $this->checkValidation($request);

     Category::where('category_id',$id)->update([
          'title' => $request->categoryName
       ]);

        Alert::success('Category Update', 'Category upated Successfully...');


       return redirect()->route('categoryPage');
    }




    // delete   category

    public function deleteCategory($id){
        Category::where('category_id',$id)->delete();

         Alert::success('Category Delete', 'Category Deleted Successfully...');


      return back();
    }


    // check category validation for category List
    private function checkValidation($request){
        $request->validate([
        'categoryName' => 'required'
       ]);
    }
}
