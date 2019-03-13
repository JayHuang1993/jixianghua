<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCoursesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('courses', function (Blueprint $table) {
            $table->increments('id');
            $table->string('course_name')->comment('课程名称');
            $table->string('course_introduce')->comment('课程简介');
            $table->string('course_image')->comment('课程图片');
            $table->timestamp('course_start_at')->comment('课程开始时间');
            $table->string('course_type')->comment('课程类型');
            $table->text('course_graphic_introduce')->comment('课程图文介绍')->nullable();
            $table->string('course_status')->comment('课程状态');
            $table->string('course_is_top')->default('no')->comment('课程是否置顶');
            $table->string('course_is_recommend')->default('yes')->comment('课程是否推荐');
            $table->integer('course_price')->comment('课程价格');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('courses');
    }
}
