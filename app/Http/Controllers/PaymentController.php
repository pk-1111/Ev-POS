<?php

namespace App\Http\Controllers;

use App\Models\Payment;
use Illuminate\Http\Request;
use Inertia\Inertia;
use RealRashid\SweetAlert\Facades\Alert;

class PaymentController extends Controller
{
   //  payment page
    public function paymentMethodPage(){
       $payments = Payment::get();
       return Inertia::render('Admin/PaymentMethod/PaymentMethod',
       [
         'payments' => $payments,
       ]);
    }


    // paymentcreate

    public function paymentMethodCreate(Request $request){
          // $this->checkAdminPaymentValidation($request);

        Payment::create([
        'account_number'  => $request->account_number,
        'account_name'  => $request->account_name,
        'type'  => $request->type,

      ]);

      // dd($payment->toArray());


      Alert::success('PaymentMethod Create', 'Category Created Successfully...');


      return back();
    }


      public function deletePaymentMethod($id){
        Payment::where('id',$id)->delete();

         Alert::success('Product Delete', 'Product Deleted Successfully...');

          return back();
    }






    // payment validation

      private function checkAdminPaymentValidation($request) {
        $request->validate([

            'accountNumber' => 'required|digits_between:8,20',
            'accountName' => 'required',
            'accountType' => 'required'


        ],[

        ],[
        ]);
    }
}

