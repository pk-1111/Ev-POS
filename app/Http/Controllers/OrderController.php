<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\PaymentHistory;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;




class OrderController extends Controller
{  


//   paymenthistory page
   
   public function paymentHistoryPage(){
      $paymentHistory = PaymentHistory::select('payment_histories.*','orders.status as order_status')
                           ->leftJoin('orders','payment_histories.order_code','=','orders.order_code')
                           ->get();
          $orders = Order::where('user_id', Auth::user()->id)->get();

       

          return Inertia::render('Admin/Payment_History/PaymentHistory',[
    'paymentHistory' => $paymentHistory,
    'orders'  => $orders,
   
       ]);
    }



    // order details

    public function orderProductDetailsPage($orderCode){
        $orders = Order::select('orders.count as order_count','orders.order_code as order_code','orders.color as color','orders.capacity as capacity','orders.created_at as created_at','products.id as product_id','products.name as product_name','products.price as product_price','products.stock as available_stock','products.image as product_image','users.name as user_name','users.nickname as user_nickname','users.phone as user_phone','users.email as user_email','users.address as user_address')
                               ->leftJoin('products','orders.product_id','products.id')
                               ->leftJoin('users','orders.user_id','users.id')
                               ->where('orders.order_code',$orderCode)
                               ->get();

      // $payslipData  = PaymentHistory::where('order_code',$orderCode)->first();
      // $orders = Order::where('user_id', Auth::user()->id)->get();


      return Inertia::render('Admin/Payment_History/orderProductDetails',[
        'order' => $orders
      ]);
    }

}
