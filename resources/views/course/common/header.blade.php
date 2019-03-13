<!DOCTYPE html>
<html class=""><!--<![endif]-->
@include('course.common.loading')

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,Chrome=1">
    <meta name="viewport" content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
    <meta name="renderer" content="webkit">
    <meta name="baidu-site-verification" content="XN2OVFQdUg">
    <title> 吉祥花学习社区</title>
    <meta name="keywords" content="">
    <meta name="description" content="">
    <meta content="W6HQiVu9b4dCnj3OxzMfaV5GormkOC18Wsv8edvJ_XY" name="csrf-token">
    <meta content="1" name="is-login">
    <meta content="1" name="is-open">

    <link rel="shortcut icon" type="image/x-icon" href="/assets/logo4x4.png" media="screen"/>
    <link rel="stylesheet" href="/assets/index/haozhi_index_files/bootstrap.css">
    <link rel="stylesheet" media="screen" href="/assets/index/haozhi_index_files/common.css">
    <link rel="stylesheet" media="screen" href="/assets/index/haozhi_index_files/font-awesome.min.css">
    <link rel="stylesheet" media="screen" href="/assets/index/haozhi_index_files/es-icon.css">
    <link rel="stylesheet" href="/assets/index/haozhi_index_files/main.css">
    <link rel="stylesheet" type="text/css" href="/assets/index/haozhi_index_files/howzhi.css">
    <link rel="stylesheet" type="text/css" href="/assets/index/haozhi_index_files/iconfont.css">
    <link rel="stylesheet" type="text/css" href="/assets/index/haozhi_index_files/index.css">

    <!--[if lt IE 9]>
    <script src="/assets/libs/html5shiv.js?7.5.15.1"></script>
    <![endif]-->
    <!--[if IE 8]>
    <script src="/assets/libs/respond.min.js?7.5.15.1"></script>
    <![endif]-->
    <link href="https://cdn.bootcss.com/sweetalert/1.1.3/sweetalert.min.css" rel="stylesheet">
    <script src="https://cdn.bootcss.com/sweetalert/1.1.3/sweetalert.min.js"></script>
    <script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js"></script>
    <script src="http://res.wx.qq.com/open/js/jweixin-1.2.0.js" type="text/javascript" charset="utf-8"></script>
    <link rel="stylesheet" href="/assets/layui/css/layui.css">
    <script src="/assets/layui/layui.all.js"></script>
    <style>
        body /shadow-deep/ [touch-action="none"] {
            -ms-touch-action: none;
            touch-action: none;
            touch-action-delay: none;
        }

        [touch-action="auto"] {
            -ms-touch-action: auto;
            touch-action: auto;
            touch-action-delay: none;
        }

        body /shadow-deep/ [touch-action="auto"] {
            -ms-touch-action: auto;
            touch-action: auto;
            touch-action-delay: none;
        }

        [touch-action="pan-x"] {
            -ms-touch-action: pan-x;
            touch-action: pan-x;
            touch-action-delay: none;
        }

        body /shadow-deep/ [touch-action="pan-x"] {
            -ms-touch-action: pan-x;
            touch-action: pan-x;
            touch-action-delay: none;
        }

        [touch-action="pan-y"] {
            -ms-touch-action: pan-y;
            touch-action: pan-y;
            touch-action-delay: none;
        }

        body /shadow-deep/ [touch-action="pan-y"] {
            -ms-touch-action: pan-y;
            touch-action: pan-y;
            touch-action-delay: none;
        }

        [touch-action="pan-x pan-y"], [touch-action="pan-y pan-x"] {
            -ms-touch-action: pan-x pan-y;
            touch-action: pan-x pan-y;
            touch-action-delay: none;
        }

        body /shadow-deep/ [touch-action="pan-x pan-y"], body /shadow-deep/ [touch-action="pan-y pan-x"] {
            -ms-touch-action: pan-x pan-y;
            touch-action: pan-x pan-y;
            touch-action-delay: none;
        }
    </style>
    <style id="style-1-cropbar-clipper">/* Copyright 2014 Evernote Corporation. All rights reserved. */
        .en-markup-crop-options {
            top: 18px !important;
            left: 50% !important;
            margin-left: -100px !important;
            width: 200px !important;
            border: 2px rgba(255, 255, 255, .38) solid !important;
            border-radius: 4px !important;
        }

        .en-markup-crop-options div div:first-of-type {
            margin-left: 0px !important;
        }

        .mes_count {
            position: absolute;
            top: 28px;
            left: 22px;
            text-align: center;
            background-color: #ff4500;
            width: 8px;
            height: 8px;
            line-height: 14px;
            border-radius: 9px;
            color: #fff;
            font-size: 12px;
            font-family: \\5FAE\8F6F\96C5\9ED1, YaHei, \\9ED1\4F53, Hei, Tahoma, Helvetica, arial, sans-serif;
        }


    </style>
</head>

<body class="index">
<header class="header">
    <div class="container">
        <div class="navbar-header pull-left">
            <a href="/" style="max-width: 500px;left: 40%" class="navbar-brand">
                <img src="/assets/logo.png" class="img-responsive" alt="吉祥花">
            </a>
            <button class="navbar-toggle" data-target=".navbar-collapse" data-toggle="collapse" type="button">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
        </div>
        <script>
            $(function () {
                if (($('html').width()) < 250) {
                    $('.navbar-toggle').show();
                    $('.navbar-collapse').removeClass(' navbar-collapse')
                }
                $('.navbar-toggle').click(function () {
                    $('.collapse').toggle()
                })
                $('.dropdown-toggle').click(function () {
                    $('#dropdown-men1').toggle()
                })
            })
        </script>

        <nav class="navbar-collapse pull-left collapse ">
            <ul class="nav navbar-nav topmenu">

                <?php $nav_list = [
                    [
                        'url' => '/',
                        'name' => '入门摄影课程'
                    ],
                ]; ?>
                <?php foreach ($nav_list as $val): ?>
                <li>
                    <a class="font_contro" href="<?php echo $val['url'] ?>"><?php echo $val['name'] ?> </a>
                </li>
                <?php endforeach; ?>
            </ul>
        </nav>

        @if(Auth::check())
            <div class="pull-right user-nav clearfix">
                <ul class="nav pull-right">
                    <li class="dropdown user-nav-dropdown user-img">
                        <a href="#" class="dropdown-toggle">
                            {{ Auth::user()->name }}
                        </a>
                        <ul class="dropdown-menu" id="dropdown-men1" style="display: none;z-index: 9999999" role="menu">
                            <li><a href="/index/user_home"><i class="fa fa-graduation-cap"></i>个人中心</a></li>
                            <li><a href="/index/user_set_info"><i class="hz-icon icon-setting"></i>个人设置</a></li>
                            <li><a href="/index/user_order"><i class="hz-icon icon-accountbalancewallet"></i>课程中心</a>
                            </li>
                            <li>
                                <a href="{{ route('logout') }}" onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                    <i class="fa fa-sign-out"></i>退出登录</a>
                            </li>
                            <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                @csrf
                            </form>
                        </ul>
                    </li>
                    {{--<li class="user-msg user-nav-dropdown hidden-xs ">--}}

                    {{--<a href="/index/user_write_blog" class="dropdown-toggle" data-toggle="dropdown" role="button"--}}
                    {{--aria-expanded="false">--}}
                    {{--<i class="hz-icon icon-notifications"></i>--}}
                    {{--<em ng-if="message.newMsgsCount" class="mes_count"></em>--}}
                    {{--</a>--}}
                    {{--<ul class="dropdown-menu text-center" role="menu">--}}
                    {{--<li><a href="/user/message"><i class="hz-icon icon-bullhorn"></i>公告</a></li>--}}
                    {{--<li><a href="/index/user_home?mao=my_msg"><i class="hz-icon icon-mail"></i>私信</a></li>--}}
                    {{--<li><a href="/user/question"><i class="hz-icon icon-livehelp "></i>问答</a></li>--}}
                    {{--</ul>--}}
                    {{--</li>--}}
                </ul>
            </div>
        @else
            <div class="pull-right user-nav clearfix">
                <ul class="nav nav-login">
                    <li><a class="color-gray-one" href="/login">登录</a></li>
                    <li><a href="/register">注册</a></li>

                </ul>
            </div>
        @endif
    </div>
</header>

<style>
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
<script>
    if ($('html').width() < 1280) {
        $('.font_contro').attr('style', 'font-size:14px')
    }

    $(function () {

        $('#loading_box').hide();
    })

</script>