<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Cart; // Cart model ကို use လုပ်ဖို့ မမေ့ပါနဲ့
use App\Models\Order;
use App\Models\PaymentHistory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class UserOrderController extends Controller
{   

    public function orderPage(){
           $orders = Order::where('user_id', Auth::user()->id)->get();

       return Inertia::render('User/Order/Order',[
        'orders' => $orders
       ]);
    }
  
    public function orderStore(Request $request)
    {
        // ၁။ လက်ရှိ User ရဲ့ Cart ထဲက ပစ္စည်းတွေကို အရင်သွားယူမယ်
        $cartData = Cart::where('user_id', Auth::user()->id)->get();

        // dd($cartData->toArray());

        // ၂။ Cart ထဲမှာ ပစ္စည်းရှိမှ အောက်က အလုပ်တွေကို လုပ်မယ်
        if ($cartData->count() > 0) {
            
            foreach ($cartData as $item) {
                Order::create([
                    'user_id'      => Auth::user()->id,
                    'product_id'   => $item->product_id,
                    'order_code'   => $request->order_code, // Frontend က ပါလာတဲ့ code
                    'total_amount' => $item->price * $item->qty, // ပစ္စည်းတစ်ခုချင်းစီရဲ့ total
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

          

            // ၃။ အရေးကြီးဆုံးအချက် - Order တင်ပြီးရင် Cart ကို ရှင်းထုတ်ပစ်မယ်
            Cart::where('user_id', Auth::user()->id)->delete();

            // ၄။ အားလုံးပြီးရင် Success page သို့မဟုတ် မူရင်း page ကို ပြန်ပို့မယ်
            return redirect()->route('orderPage')->with('success', 'Order placed successfully!');
        }

        return back()->with('error', 'Your cart is empty!');
    }
}