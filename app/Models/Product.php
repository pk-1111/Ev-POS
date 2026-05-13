<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = ['name','price','description','category_id','stock','image'];

     public function discount() {
        return $this->hasOne(Discount::class,'product_id','id');
     }

}
