<?php

namespace App\Http\Controllers;

use App\Models\ActionLog;
use App\Models\Cart;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;



class CartController extends Controller
{
    //  addToCart Page

    public function addToCart(Request $request){

    $product = Product::find($request->product_id);

    //  dd($request->all());

       Cart::create([
        'user_id' => Auth::user()->id ,
        'product_id' => $request->product_id ,
        'price'      => $product->price,
        'capacity'  => $request->capacity ,
        'color'    =>   $request->color,
        'qty'  => $request->qty,
        'image' => $product->image

       ]);

         // activity logs for add to cart
    //   $this->actionLogAdd( $request->userId ,$request->productId , 'addToCart');


       $cart = Cart::select('products.id as products_id','carts.id as cart_id','products.image','products.name','products.price','carts.qty','carts.capacity','carts.color')
                      ->leftJoin('products','carts.product_id','products.id')
                      ->where('carts.user_id',Auth::user()->id)
                      ->get();

                    //   dd($cart->toArray());

                    $total = 0;

                    foreach( $cart as $item ) {
                        $total += $item->price * $item->qty;
                    }

        return redirect()->route('cartShow');
    }


     public function cartShow(){

    //  dd($request->all());




       $cart = Cart::select('products.id as product_id','carts.id as cart_id','products.image','products.name','products.price','carts.qty','carts.capacity','carts.color')
                      ->leftJoin('products','carts.product_id','products.id')
                      ->where('carts.user_id',Auth::user()->id)
                      ->get();

                    //   dd($cart->toArray());

                    $total = 0;

                    foreach( $cart as $item ) {
                        $total += $item->price * $item->qty;
                    }

                    // dd($cart->toArray());
      
        return Inertia::render('User/Cart/Cart',[
          'cart' => $cart,
          'total' => $total
        ]);
    }

    // CartController.php ထဲမှာ ဒီ function ထည့်ပေးပါ

public function cartUpdate(Request $request) {
    Cart::where('id', $request->cart_id)
        ->update([
            'qty' => $request->qty
        ]);

    return back(); // Page ကို refresh ဖြစ်သွားစေပြီး data အသစ်ပြန်ပါလာမယ်
}


    // cart delete

    public function cartDelete($id) {
       

          Cart::where('id',$id)->delete();

        return back();

              // activity logs for delete cart
    //   $this->actionLogAdd( Auth::user()->id ,$cartId, 'cartDelete');

    //        return response()->json([
    //          'status'  => 'success'
    //        ],200);




    }


    public function productList(){
        $product = Product::get();

        return response()->json([
            'data' => $product
        ],200);
    }


    // action log process
    private function actionLogAdd($user_id,$product_id,$action){
         // activity logs
        ActionLog::create([
            'user_id' => Auth::user()->id ,
            'product_id' => $product_id ,
            'action' =>  $action
        ]);

    }

}
