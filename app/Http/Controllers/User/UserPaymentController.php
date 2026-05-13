<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Cart;
use App\Models\Payment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;


class UserPaymentController extends Controller
{
     public function paymentPage(Request $request){


      // dd($request->total_amount);

     $cartData = Cart::where('user_id', Auth::user()->id)->get();

    //  dd($cartData->toArray());

      $orderCode = "Mellso-POS".rand(100000000,999999999);



       $grandTotal = 0;
  foreach( $cartData as $item ) {
             $grandTotal += $item->price * $item->qty;
             }
       
      //  $order = Order::where('user_id',Auth::user()->id)
      //           ->where('status','pending')
      //           ->get()
      //           ->groupBy('order_code')
      //           ->map(function($items){
      //             $firstItem = $items->first();
      //             $firstItem->total_amount = $items->sum('total_amount');
      //             return $firstItem;
      //           })
      //           ->values();
       $payments = Payment::orderBy('type','asc')->get();
     
       return Inertia::render('User/Payment/Payment',[
       
         'payments' => $payments,
         'orderCode'    => $orderCode,
         'grandTotal'   => $grandTotal
       ]);
    }
}
