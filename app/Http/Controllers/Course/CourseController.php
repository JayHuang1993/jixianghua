<?php

namespace App\Http\Controllers\Course;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\CoursesModel;

class CourseController extends Controller
{
    public function __construct()
    {
        view()->share('is_ios', false);
    }

    /**
     * 课程详情页面
     * @param Request $request
     * @param $id
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function detail(Request $request, $id)
    {
        $course_detail = CoursesModel::find($id);
        view()->share('course_detail', $course_detail);
        return view('course.detail');
    }
}
