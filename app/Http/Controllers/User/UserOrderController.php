<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Cart; 
use App\Models\Order;
use App\Models\PaymentHistory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class UserOrderController extends Controller
{   
  
    //  order Page

    public function orderPage(){
           $orders = Order::where('user_id', Auth::user()->id)->get();

       return Inertia::render('User/Order/Order',[
        'orders' => $orders
       ]);
    }


    // order store 

    public function orderStore(Request $request)
    {
       
        $cartData = Cart::where('user_id', Auth::user()->id)->get();

        // dd($cartData->toArray());

       
        if ($cartData->count() > 0) {
            
            foreach ($cartData as $item) {
                Order::create([
                    'user_id'      => Auth::user()->id,
                    'product_id'   => $item->product_id,
                    'order_code'   => $request->order_code, 
                    'total_amount' => $item->price * $item->qty,
                    'image'        => $item->image,
                    'capacity'     => $item->capacity,
                    'color'        => $item->color,
                    'count'        => $item->qty,
                    'status'       => 'Payment Successful'
                ]);
            }


            $fileName = null;

            if($request->hasFile('image')){
                  // store new image
            $file = $request->file('image');
            $fileName = uniqid() .'_'. $file->getClientOriginalName();
           $file->move(public_path() . '/payslip/',$fileName);
            }


            PaymentHistory::create([
                'user_name' => Auth::user()->name,
                'phone'     => $request->phone,
                'address'   => $request->address,
                'payslip_image'  => $fileName,
                'payment_method' => $request->payment_type[0]['type'],
                'order_code'     => $request->order_code,
                'total_amt'      => $request->total_amount
            ]);

          

            // cart delete
            Cart::where('user_id', Auth::user()->id)->delete();

          
            return redirect()->route('orderPage')->with('success', 'Order placed successfully!');
        }

        return back()->with('error', 'Your cart is empty!');
    }
}