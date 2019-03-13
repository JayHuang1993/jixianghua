<?php

namespace App\Http\Controllers\Course;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function __construct()
    {
        view()->share('login_user_info', []);
        view()->share('is_mobile', false);
        view()->share('is_ios', false);
    }
}
