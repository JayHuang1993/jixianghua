<?php

namespace App\Admin\Controllers;

use App\Models\CoursesModel;
use App\Http\Controllers\Controller;
use Encore\Admin\Controllers\HasResourceActions;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Layout\Content;
use Encore\Admin\Show;

class CoursesController extends Controller
{
    use HasResourceActions;

    /**
     * Index interface.
     *
     * @param Content $content
     * @return Content
     */
    public function index(Content $content)
    {
        return $content
            ->header('早学课程')
            ->description('列表')
            ->body($this->grid());
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
     * @return Content
     */
    public function create(Content $content)
    {
        return $content
            ->header('Create')
            ->description('description')
            ->body($this->form());
    }

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        $grid = new Grid(new CoursesModel);

        $grid->id('ID');
        $grid->course_name('课程名称');

        $grid->course_image('课程图片')->display(function($course_image) {
            return '<img src="/uploads/' . $course_image . '" height="100px">';
        });

        $grid->course_price('课程价格')->display(function($course_price) {
            return "￥$course_price";
        });

        $grid->course_status('课程状态');
        $grid->course_is_top('是否置顶');
        $grid->course_is_recommend('是否推荐');
        $grid->course_type('课程类型');
        $grid->created_at('Created at');
        $grid->updated_at('Updated at');

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
        $show = new Show(CoursesModel::findOrFail($id));


        $show->id('ID');
        $show->course_name('课程名称');

        $show->course_image('课程图片')->display(function($course_image) {
            return '<img src="/uploads/' . $course_image . '" height="100px">';
        });

        $show->course_price('课程价格')->display(function($course_price) {
            return "￥$course_price";
        });

        $show->course_status('课程状态');
        $show->course_is_top('是否置顶');
        $show->course_is_recommend('是否推荐');
        $show->course_type('课程类型');
        $show->course_graphic_introduce('课程图文介绍');
        $show->created_at('Created at');
        $show->updated_at('Updated at');

        return $show;
    }

    /**
     * Make a form builder.
     *
     * @return Form
     */
    protected function form()
    {
        $form = new Form(new CoursesModel);

        $form->text('course_name', '课程名称');
        $form->textarea('course_introduce', '课程简介');
        $form->image('course_image', '课程图片');

        $form->select('course_type', '课程类型')->options([
            'photography' => '摄影',
            'dance' => '舞蹈',
            'music' => '音乐',
            'calligraphy' => '书法',
            'english' => '英语'
        ]);

        $form->currency('course_price', '课程价格')->symbol('￥');
        $form->datetime('course_start_at', '课程开始时间');
        $form->datetime('course_end_at', '课程结束时间');
        $form->editor('course_graphic_introduce', '课程图文介绍');

        $form->radio('course_is_top', '课程是否置顶')->options([
            'yes' => '是',
            'no' => '否'
        ])->default('no');

        $form->radio('course_is_recommend', '课程是否推荐')->options([
            'yes' => '是',
            'no' => '否'
        ])->default('no');

        $form->select('course_status', '课程状态')->options([
            'show' => '显示',
            'hide' => '隐藏'
        ])->default('hide');

        return $form;
    }
}
