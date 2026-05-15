<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Inertia\Inertia;

class ProductController extends Controller
{
    // product details page
    
    public function productDetailsPage($id)
    {
       

          $product = Product::select('products.id','products.name','products.price','products.description','products.image','products.stock as available_item','categories.title as category_name')
                     ->leftJoin('categories','products.category_id','categories.category_id')
                     ->where('id',$id)
                     ->first();

          $productList = Product::select('products.id','products.name','products.price','products.description','products.image','categories.title as category_name')
                     ->leftJoin('categories','products.category_id','categories.category_id','categories.title as category_name')
                     ->where('categories.title',$product['category_name'])
                     ->where('products.id','!=',$product['id'])
                     ->get();


         return Inertia::render('User/Product/ProductDetails',[
            'product' => $product
         ]);
    }

    
}
