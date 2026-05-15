<?php

namespace App\Http\Controllers;



use App\Models\Product;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class HomeController extends Controller
{
    // user home direct

    public function userHome(){
          $trendingProducts = Product::select('products.*','categories.title as category_name')
                        ->join(DB::raw('(SELECT MIN(id) as id FROM products GROUP BY category_id) as unique_products'),function($join){
                            $join->on('products.id','=','unique_products.id');
                        })
                        ->leftJoin('categories','products.category_id','categories.category_id','categories.title as category_name')
                       
                        ->take(3)
                        ->get();

                        // dd($trendingProducts->toArray());
          return Inertia::render('User/Home/Home',
          [
              'trendingProducts' =>  $trendingProducts,
          ]);
    }

    // viewAll Page

    public function viewAllPage(){
          $products = Product::get();

                        // dd($trendingProducts->toArray());
          return Inertia::render('User/ViewAll/ViewAll',
          [
              'products' =>  $products,
          ]);
    }
}




