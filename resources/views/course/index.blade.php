@include('course.common.header')
<link href="https://cdn.bootcss.com/Swiper/4.2.2/css/swiper.min.css" rel="stylesheet">
<link rel="stylesheet" href="https://m-cdns.genshuixue.com/v2/resources/page/homeIndex/index_f7a99b6ea4.css">

<!-- Swiper JS -->
<script src="https://cdn.bootcss.com/Swiper/4.2.2/js/swiper.min.js"></script>

<!-- Initialize Swiper -->
<script>
    var swiper = new Swiper('.swiper-container', {
        autoplay: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    });
</script>
<style>
    .course-img {
        height: 200px;
        overflow: hidden;
    }

    .course-img img {
        width: 100%;
        height: auto;
        max-width: 100%;
        display: block;
    }

    .classroom-list .pic {
        height: 200px;
        overflow: hidden;
    }

    .classroom-list .pic img {
        width: 100%;
        height: auto;
        max-width: 100%;
        display: block;
    }
</style>

<section class="es-poster hz-poster">
    {{--<div class="swiper-button-prev"><i class=""></i></div>--}}
    {{--<div class="swiper-button-next"><i class=""></i></div>--}}
    <div class="swiper-container">
        <div class="swiper-wrapper" style=" transition-duration: 0.3s;">
            <div class="swiper-slide"
                 style="">
                <a href="" target="" title="">
                    <img style="height: 100%;max-width: 100%; display: block;margin:0 auto;" src="/assets/logo.png">
                </a>
                <div class="hz-site hz-themes ">
                    <div class="container">
                        {{--<div class="site-data act">--}}
                            {{--<div class="data">--}}
                                {{--<p class="hz-line-left">12312</p>--}}
                                {{--<div class="number">--}}
                                    {{--<strong style="font-size: 3rem">123</strong>--}}
                                {{--</div>--}}
                            {{--</div>--}}
                            {{--<a onclick=""--}}
                               {{--style="margin-right: 1rem;width: 200px;float: right"--}}
                               {{--target=""--}}
                               {{--class="text-center">--}}
                                {{--立即进入--}}
                            {{--</a>--}}
                        {{--</div>--}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<div class="hzindex-course index-sec">
    <div class="container">
        <h2>
            <strong>精品课程</strong>
        </h2>
        <div class="index-course-list course">
            <div class="row clearfix act" id="course-commend4">

                @foreach ($classic_courses as $course)
                    <div class="col-sm-3 col-xs-12 ">
                        <div class="course-item" style="width:100%;">
                            <div class="course-img">
                                <a href="/course/detail/{{ $course['id'] }}">
                                    <div style="
                                            background-image: url('/uploads/{{ $course['course_image'] }}');
                                            width: 100%;
                                            height: 200px;
                                            background-position: center;
                                            max-width: 100%;
                                            display: block;
                                            background-size: cover;
                                            " src="" alt="" class=""></div>
                                </a>
                            </div>
                            <div class="course-info">
                                <div class="title">
                                    <a href="/course/detail/{{ $course['id'] }}">{{ $course['course_name'] }}</a>

                                    <div class="price free pull-right">
                                        <span>{{($course['course_price'] > 0) ? '￥' . $course['course_price'] : '免费'}}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    @endforeach

            </div>
        </div>
    </div>
</div>
@include('course.common.footer')