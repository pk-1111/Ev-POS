<?php

namespace App\Http\Controllers;


use App\Models\Product;
use Inertia\Inertia;

class ShopController extends Controller
{
    //
     public function userShop(){
       
         $products = Product::select('categories.title as category_name','products.id','products.name','products.image','products.price','products.category_id','products.stock')
        ->leftJoin('categories','products.category_id','categories.category_id')->get();

        // dd($products->toArray());
          return Inertia::render('User/Shop/Shop',[
            'products' => $products
          ]);
    }







    // 

    public function learnMorePage(){
       return Inertia::render('User/LearnMore/LearnMore');
    }

    public function LocationPage(){
       return Inertia::render('User/Location/Location');
    }
}
