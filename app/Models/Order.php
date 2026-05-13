<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
  protected $fillable = ['user_id','product_id','image','count','status','color','capacity','order_code','total_amount'];
}


