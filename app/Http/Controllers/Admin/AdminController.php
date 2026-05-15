<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Inertia\Inertia;


class AdminController extends Controller
{
    //  admin home Page

      public function adminHome(){
          return Inertia::render('Admin/Home/AdminHome');
    }
}
