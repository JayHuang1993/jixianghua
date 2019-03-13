<?php

namespace App\Admin\Controllers;

use App\Models\CoursesModel;
use App\Models\PeriodsModel;
use App\Http\Controllers\Controller;
use Encore\Admin\Controllers\HasResourceActions;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Show;
use Encore\Admin\Layout\Content;
use Illuminate\Http\Request;
use Encore\Admin\Widgets\Form as UsualForm;

class PeriodsController extends Controller
{
    use HasResourceActions;

    static public $form_instance;

    /**
     * Index interface.
     *
     * @param Content $content
     * @param $request
     * @param $coursesModel
     * @return Content
     */
    public function index(Content $content, Request $request, CoursesModel $coursesModel)
    {
        $course_id = $request->get('course_id', 1);
        $course = CoursesModel::find($course_id);

        $content->header("课程名：{$course->course_name}");
        $content->row('<h5>课程列表</h5>');

        $content->row(function ($row) use ($coursesModel, $course_id) {
            $this->selectCourse($coursesModel);
            $row->column(4, $this->selectCourse($coursesModel));
            $row->column(8, $this->coursePeriods($course_id));
        });

        return $content;
    }

    /**
     * 返回某课程的所有课时树
     *
     * @param $course_id
     * @return \Encore\Admin\Tree
     */
    protected function coursePeriods($course_id)
    {
        return PeriodsModel::tree(function ($tree) use ($course_id) {
            $tree->query(function ($model) use ($course_id) {
                return $model->where('course_id', $course_id);
            });

            $tree->branch(function ($period) {
                return "{$period['order']} - {$period['title']}";
            });
        });
    }

    /**
     * 返回选择课程 select
     *
     * @param CoursesModel $coursesModel
     * @return UsualForm
     */
    protected function selectCourse(CoursesModel $coursesModel)
    {
        $form = new UsualForm($coursesModel);
        $form->action('/admin/periods');
        $form->method('GET');
        $form->disableReset();
        $form->select('course_id', '选择课程')->options($this->courseIdToName());

        return $form;
    }

    /**
     *  获取数据库中 课程id => 课程名称 的数组
     *
     * @return array [ [父级课程 ID => 名称], ...]
     */
    protected function courseIdToName()
    {
        $courses = [];
        foreach (CoursesModel::get(['id', 'course_name']) as $course) {
            $courses[$course->id] = "$course->course_name ( id: {$course->id} )";
        }

        return $courses;
    }

    /**
     * Show interface.
     *
     * @param mixed $id
     * @param Content $content
     * @return Content
     */
    public function show($id, Content $content)
    {
        return $content
            ->header('Detail')
            ->description('description')
            ->body($this->detail($id));
    }

    /**
     * Edit interface.
     *
     * @param mixed $id
     * @param Content $content
     * @return Content
     */
    public function edit($id, Content $content)
    {
        return $content
            ->header('Edit')
            ->description('description')
            ->body($this->form()->edit($id));
    }

    /**
     * Create interface.
     *
     * @param Content $content
     * @param PeriodsModel $periodsModel
     * @return Content
     */
    public function create(Content $content, PeriodsModel $periodsModel)
    {
        return $content
            ->header('Create')
            ->description('description')
            ->body($this->form($periodsModel));
    }

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        $grid = new Grid(new PeriodsModel);


        return $grid;
    }

    /**
     * Make a show builder.
     *
     * @param mixed $id
     * @return Show
     */
    protected function detail($id)
    {
        $show = new Show(PeriodsModel::findOrFail($id));

        return $show;
    }

    /**
     * Make a form builder.
     *
     * @param $periodsModel
     * @return Form
     */
    protected function form(PeriodsModel $periodsModel)
    {
        $form = new Form($periodsModel);

        $form->select('course_id', '选择课程')->options($this->courseIdToName());
        $form->text('title', '课时名称');
        $form->text('time_consuming', '课时耗时');

        return $form;
    }
}