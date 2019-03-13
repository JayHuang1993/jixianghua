<?php

namespace App\Http\Controllers\Course;

use Illuminate\Http\Request;
use App\Models\CoursesModel;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class IndexController extends Controller
{
    public function __construct()
    {
        view()->share('login_user_info', []);
        view()->share('is_mobile', false);
        view()->share('is_ios', false);
    }

    public function index()
    {
        // 查询精品课程
        $classic_courses = CoursesModel::where([
            ['course_status', '=', 'show'],
            ['course_is_recommend', '=',  'yes'],
            ['course_end_at', '>=', date('Y-m-d H:i:s')]
        ])->get();

        view()->share('classic_courses', $classic_courses);
        return view('course.index');
    }
}
