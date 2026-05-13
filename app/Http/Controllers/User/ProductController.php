<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function productDetailsPage($id)
    {
        //

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

    /**
     * Show the form for creating a new resource.
     */
 

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(c $c)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(c $c)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, c $c)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(c $c)
    {
        //
    }
}
