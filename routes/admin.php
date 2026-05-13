 <?php




use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\ProfileController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;


Route::group(['middleware' => ['web','auth']] ,function(){

Route::get('/adminhome',[AdminController::class,'adminHome'])->name('adminHome');

Route::get('/category',[CategoryController::class,'categoryPage'])->name('categoryPage');

Route::post('/category',[CategoryController::class,'createCategory'])->name('createCategory');

Route::delete('category/{id}',[CategoryController::class,'deleteCategory'])->name('deleteCategory');

Route::post('edit/{id}',[CategoryController::class,'editCategoryPage'])->name('editCategoryPage');

Route::post('update/{id}',[CategoryController::class,'editCategory'])->name('editCategory');

Route::get('/add-product',[ProductController::class,'createProductPage'])->name('createProductPage');

Route::post('/add-product',[ProductController::class,'createProduct'])->name('createProduct');

Route::get('/product-list',[ProductController::class,'productListPage'])->name('productListPage');

Route::get('product-view/{id}',[ProductController::class,'productViewPage'])->name('productViewPage');

Route::delete('delete-list/{id}',[ProductController::class,'deleteProduct'])->name('deleteProduct');

Route::get('/edit-product/{id}',[ProductController::class,'editProductPage'])->name('editProductPage');

Route::post('/edit-product',[ProductController::class,'editProduct'])->name('editProduct');


Route::get('/payment_history',[OrderController::class,'paymentHistoryPage'])->name('paymentHistoryPage');
Route::get('/orderProductDetails/{orderCode}',[OrderController::class,'orderProductDetailsPage'])->name('orderProductDetailsPage');



  
Route::get('/payment-page',[PaymentController::class,'paymentMethodPage'])->name('paymentMethodPage');
Route::post('/payment',[PaymentController::class,'paymentMethodCreate'])->name('paymentMethodCreate');
Route::delete('/payment-delete/{id}',[PaymentController::class,'deletePaymentMethod'])->name('deletePaymentMethod');

Route::get('/change-password',[ProfileController::class,'changePasswordPage'])->name('changePasswordPage');
Route::post('/change-password',[ProfileController::class,'changePassword'])->name('changePassword');




    



 });




 


?>
