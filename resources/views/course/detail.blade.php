@include('course.common.header')
<style>
    .course_introduce {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
    }

    .top_buffer {
        margin-top: 20px;
    }
</style>

<section class="course-header-new" style="background-image:unset;background: #15c288">
    <div class="container">
        <!-- 面包屑 -->
        <div class="bread_crumb">
            <div class="breadcrumb">
                <a href="/">吉祥花早学</a>
                <span> &gt; </span>
                <a href="">摄影课程</a>
                <span> &gt; </span>
                <a href=""> <span class="in">入门摄影课程</span></a>
            </div>
        </div>

        <div class="row hz-course-before">
            <div class="col-md-5 col-xs-12">
                <img class="img-responsive" src="/uploads/{{ $course_detail->course_image }}">
            </div>
            <div class="col-md-7 col-xs-12">
                <h1 class="col-md-12 col-xs-12 top_buffer">
                    <b>课程：</b>{{ $course_detail->course_name }}</h1>
                <p class="col-md-12 col-xs-12 top_buffer">
                    <b>学费：</b><span class="text-warning">{{ $course_detail->course_price == 0 ? '免费' : '¥ ' . $course_detail->course_price }}</span>
                </p>
                <p class="col-md-12 col-xs-12 course_introduce top_buffer">
                    <b>简介</b>: {{ $course_detail->course_introduce }}{{ $course_detail->course_introduce }}{{ $course_detail->course_introduce }}
                </p>
                <button type="button" id="" class="col-md-3 col-xs-12 btn btn-warning btn-lg top_buffer"
                        onclick="joinClass()">
                    加入课程
                </button>
            </div>
        </div>

    </div>
    <input id="isjoin" type="hidden" value="false">
</section>

<section class="container">
    <div class="row">
        <div class="col-md-9">

            <div class="course-lessons flat" data-widget-cid="widget-1">
                <div class="course-nav clearfix affix-top" id="myScrollspy">
                    <ul class="nav">
                        <li class="active"><a href="/">图文介绍</a></li>
                        <li class=""><a href="#class_list">课时
                                <span>(1)</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="hz-overview hzcourse-detail">
                    <h3 class="overview-title hz-line-left">图文介绍</h3>
                    <div class="editor-text ptl">
                        {!! $course_detail->course_graphic_introduce !!}
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<script>
    $(function () {
    });

    function joinClass() {
    }
</script>
@include('course.common.footer')