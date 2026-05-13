<?php


use App\Http\Controllers\CartController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ShopController;
use App\Http\Controllers\User\ProductController;
use App\Http\Controllers\User\UserOrderController;
use App\Http\Controllers\User\UserPaymentController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
 Route::group(['middleware' => ['web','auth']] ,function(){

// Route::get('/home',[HomeController::class,'userHome'])->name('userHome');


Route::get('/shop',[ShopController::class,'userShop'])->name('userShop');

Route::get('/learn-more',[ShopController::class,'learnMorePage'])->name('learnMorePage');

Route::get('/location',[ShopController::class,'locationPage'])->name('locationPage');

 

Route::get('/product-details/{id}',[ProductController::class,'productDetailsPage'])->name('productDetailsPage');

Route::get('/view-all',[HomeController::class,'viewAllPage'])->name('viewAllPage');




 // addToCart

    Route::get('cart',[CartController::class,'cartShow'])->name('cartShow');

    Route::post('/cart/update', [CartController::class, 'cartUpdate'])->name('cartUpdate');

    Route::post('/cart/store',[CartController::class,'addToCart'])->name('addToCart');

      // cart delete
    Route::delete('cart/delete/{cart_id}',[CartController::class,'cartDelete'])->name('cartDelete');

    Route::get('payment',[UserPaymentController::class,'paymentPage'])->name('paymentPage');

    Route::get('/checkout/store',[UserOrderController::class,'orderPage'])->name('orderPage');

     Route::post('/checkout/store',[UserOrderController::class,'orderStore'])->name('orderStore');


 });


 Route::get('/home',[HomeController::class,'userHome'])->name('userHome');



 


 