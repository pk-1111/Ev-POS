<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Discount;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;
use RealRashid\SweetAlert\Facades\Alert;



class ProductController extends Controller
{   

    //  public function all_ProductsPage(){
    //    $products = Product::get();
    //     return Inertia::render('User/Home/Home',[
    //         'products' => $products,
    //     ]);

    // }

    
    // direct product create Page

    public function createProductPage(){
        $categories = Category::all();
        return Inertia::render('Admin/Product/ProductCreate',[
            'categories' => $categories,
        ]);

    }


     // create product
    public function createProduct(Request $request){
    //    dd("Controller inside.");
        // $this->checkProductValidation($request,"create");
       $product = $this->getProductData($request);

    //    dd($product);

       if($request->hasFile('image')){
          // store new image
            $file = $request->file('image');
            $fileName = uniqid() .'_'. $file->getClientOriginalName();
           $file->move(public_path() . '/product/',$fileName);

            $product['image'] = $fileName;
        } else {
            $product['image'] = null;
        }

       try{
          $created = Product::create($product);

        //   if($created){
        //     dd('Success Database');
        //   }else{
        //     dd('Fail');
        //   }
           
            return back()->with('success','Product created!');
       }catch(\Exception $e){
        return $e->getMessage();
       }
         if($request->filled('rate') && $request->rate != null ){
            Discount::create([
              'product_id' => $newProduct->id,
              'rate' => $request->rate,
            ]);
         }



        Alert::success('Product Create', 'Product Created Successfully...');



                return back();
                //   return to_route('productList');
       }



      // direct product list

       public function productListPage(){

         $products = Product::select('categories.title as category_name','products.id','products.name','products.image','products.price','products.category_id','products.stock')
        ->leftJoin('categories','products.category_id','categories.category_id')->get();
        

           return Inertia::render('Admin/Product/ProductList',[
             'products' => $products,
             
           ]);

       }

       public function productViewPage($id){
        
        $productDetails = Product::select('products.id','products.name','products.price','products.description','products.image','products.stock as available_item','categories.title as category_name','products.created_at')
        ->leftJoin('categories','products.category_id','categories.category_id')
        ->where('id',$id)
        ->orderBy('products.created_at')
        ->first();
        // dd($productDetails->toArray());
              return Inertia::render('Admin/Product/ProductView',[
                 'productDetails' => $productDetails,
              ]);
        }

      public function productList($amt = 'default' ){

       $products = Product::select('categories.title as category_name','products.id','products.name','products.image','products.price','products.category_id','products.stock','discounts.rate as rate')
        ->leftJoin('categories','products.category_id','categories.category_id')
        ->leftJoin('discounts','products.id','discounts.product_id')
        ->when(request('searchKey'),function($query){
            $query->whereAny(['products.name','categories.title'] , 'like', '%'.request('searchKey').'%');
        });

        if($amt != 'default') {
            $products = $products->where('stock',"<=",3);
        }


        $products = $products->orderBy('products.created_at','desc')->get();

        return view('admin.product.productList',compact('products'));
      }


      //detail product

    public function productDetails($id){

    $productDetails = Product::select('products.id','products.name','products.price','products.description','products.image','products.stock as available_item','categories.title as category_name')
        ->leftJoin('categories','products.category_id','categories.category_id')
        ->where('id',$id)
        ->first();

        return view('admin.product.productDetails',compact('productDetails'));
    }




    //update page

    public function editProductPage($id){
        $categories = Category::get();
        $product = Product::where('id',$id)->first();

         return Inertia::render('Admin/Product/ProductEdit',[
            'product' => $product,
             'categories' => $categories,
         ]);
    }

    //update product

    public function editProduct(Request $request){
        // dd($request->all());
        //  $this->checkProductValidation($request,'update');
    $productData = $this->getProductData($request);

    

     if($request->hasFile('image')){
          // store new image
            $file = $request->file('image');
            $fileName = uniqid() .'_'. $file->getClientOriginalName();
           $file->move(public_path() . '/product/',$fileName);

            $productData['image'] = $fileName;
        }

      Product::where('id',$request->id)->update($productData);

         if($request->filled('rate')){
            Discount::updateOrCreate([
              'product_id' => $request->productId,
              'rate' => $request->rate,
            ]);
         }



        Alert::success('Product Create', 'Product Created Successfully...');




                  return back();


    }

     //delete product

    public function deleteProduct($id){
        Product::where('id',$id)->delete();

         Alert::success('Product Delete', 'Product Deleted Successfully...');

          return back();
    }














     // request product data
    private function getProductData($request){
        return [
            'id'           => $request->id,
            'name'         =>  $request->name,
            'price'        =>  $request->price,
            'description'  =>  $request->description,
            'category_id'  =>  $request->category_id,
            'stock'        =>  $request->stock,
            // 'rate'         =>  $request->rate

        ];
    }

    // check product validation
    public function checkProductValidation($request,$action){
        $rules =[
            'name'  => 'required|unique:products,name,' . $request->id.',id' ,
            'categoryId'  => 'required',
            'price'  => 'required|numeric|min:1',
            'stock'  => 'required|numeric|max:999',
            'description'  => 'required|max:2000',
            'discount' => 'nullable|numeric|min:0|max:100'
        ];

        $rules['image'] = $action == 'create'  ?   'required|mimes:png,jpg,jpeg,webp,svg|file'  :  'mimes:png,jpg,jpeg,webp,svg|file';

        $message = [];

        $request->validate($rules,$message);
    }

}
