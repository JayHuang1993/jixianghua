if (typeof JmLogin == 'undefined') var JmLogin = {};

jm = {
    host:{
        root:'jiemian.com',
        a:'//a.jiemian.com',
        img:'//img.jiemian.com',
        res:'//res.jiemian.com'
    },
    ua:{
        android : !!navigator.userAgent.match(/android/ig),
        ios : !!navigator.userAgent.match(/iphone|ipod/ig),
        app : {
            is : !!navigator.userAgent.match(/JM_APP/i),
            type : !!navigator.userAgent.match(/JM_APP.+appType\/([^;\)]+)[;\)]/i)||'',
            version : !!navigator.userAgent.match(/JM_APP.+version\/([^;\)]+)[;\)]/i)||''
        },
        weixin : (/MicroMessenger/ig).test(navigator.userAgent)
    }

};
var slider = function(){
    var h = $(window).height();
    var flag=1;
    $('.burger').click(function(){
        if(flag==1){
            //执行方法;
            $('.nav').addClass('open');
            $(this).addClass('transform');
            $('.sections').addClass('downward').css({'minHeight':h});
            $('body').css({'overflow':'hidden','height':h});
            $('.scrolly').css({'height':h-220})
            flag=0;
        }else{
            //执行方法;
            $('.nav').removeClass('open');
            $(this).removeClass('transform');
            $('.sections').removeClass('downward').attr({'style':''});
            $('body').attr({'style':''})
            flag=1;
        }
    });
}
slider()
//导航菜单 滚动显示/隐藏效果
var disScroll;
var lastScrollTop = 0;
var delat = 5;
var navHight = $('.header').outerHeight();
$(window).scroll(function(event){
    disScroll = true;
});
window.headerScroll = setInterval(function (){
    if(disScroll){
        hasScrolled();
        disScroll = false;
    }
},250);
function hasScrolled(){
    var st = $(this).scrollTop();

    if(Math.abs(st - lastScrollTop) <= delat){
        return;
    };
    // st滚动距离大于导航高度并且大于上次高度
    if(st > navHight+120 && st > lastScrollTop){
        $('.header').removeClass('header-show').addClass('header-hide');
    }else{
        if(st + $(window).height() < $(document).height()){
            $('.header').removeClass('header-hide').addClass('header-show');
        }
    }
    lastScrollTop = st;
};


$(function(){
    //判断登录
	refreshNav();
})

function refreshNav(){
	if (typeof JmLogin.uid == 'undefined') {
		url = jm.host.a+'/mobile/index.php?m=user&a=getHeadImgByAjaxP';
		$.getJSON(url+"&callback=?", function(data) {
			if (data.uid != 0) {
				JmLogin = data;
				$('#login_head_img').css('background-image','url('+ data.head_img +')');
				$('#_nike_name').html(data.nike_name);
				$('#_login').show();
				$('#_no_login').hide();
			}
		});
	} else if (JmLogin.uid != 0) {
		$('#login_head_img').css('background-image','url('+ JmLogin.head_img +')');
		$('#_nike_name').html(JmLogin.nike_name);
		$('#_login').show();
		$('#_no_login').hide();
	}
}


// APP去掉头尾和分享
if ( jm.ua.app.is ) {
    $('.header').remove();
    $('.footer').remove();
    $('.btn-share').remove();
    $('#js-b-ad').remove();
} else if(jm.ua.weixin){
    $('.wx-login').show();
}


// 异步加载列表
function AsyncLoadList(_this) {
    var page = parseInt($(_this).attr('page'));
    var showText = $(_this).html();
    var appendID = $(_this).attr('appendid') ? $(_this).attr('appendid') : 'load-list';
    var url = $(_this).attr('url').replace('http://', '//');

    $(_this).html('加载中...').addClass('loading');
    $.get(url, {page : page}, function(data) {
        $('#'+ appendID).append(data.rst);

        var channelUrl = $(_this).attr('channel-url');
        var channelName = $(_this).attr('channel-name');
        if ( typeof(channelUrl) != 'undefined' && typeof(channelName) != 'undefined' ) {
            $(_this).removeClass('loading').addClass("load").removeAttr('onclick').html('<a href="'+ channelUrl +'">'+ channelName +'</a>');
        } else {
            $(_this).html(showText).attr('page', page+1).removeClass('loading');
            if (data.hideLoadBtn == true) $(_this).remove();
        }

        if ($('#'+appendID).parent().find('.list-btn.active').length > 0 )
        {
            $('#'+appendID).parent().find('.list-view').removeClass('card').children('.news-view').removeClass('card');
        }
    }, 'jsonp');
}
// 列表加载更多
function ajaxRequestList(_this) {
    var appendId = $(_this).attr('append-id');
    var page = parseInt($(_this).attr('page'));
    var url = $(_this).attr('url').replace(/_\d+\.html+/, '_'+page+'.html');
    var txt = $(_this).text();
    var type = $(_this).attr('type');

    $(_this).text('加载中，请稍后...');

    $.get(url.replace('http://', '//'), function(data) {
        $(_this).text(txt);

        if ( typeof(data.rst) != 'undefined' && data.rst != '' )
        {
            $('#'+appendId).append(data.rst);
            $(_this).attr('page', page+1);
        }

        if ( data.hideBtn == true )
        {
            if ( type == 'video' ) {
                $('#video-btn').remove();
            } else {
                $(_this).parent().html('<p>'+ $(_this).attr('txt') +'</p>');
            }
        }
    }, 'json');
}


// 列表滑动加载
if ( $('#ajax-scroll').length > 0 )
{
    var scrollObj = $('#ajax-scroll');
    var finished = false;
    var appendID = scrollObj.attr('append-id');

    $(window).scroll(function() {
        var page = parseInt(scrollObj.attr('page'));
        var url = scrollObj.attr('url').replace(/_\d+\.html+/, '_'+page+'.html');

        if ( ($(document).height() - $(window).height() - $(document).scrollTop()) <= $(window).height()  && !finished && $('#load-more').attr('load') == false )
        {
            finished = true;

            $.get(url, function(data) {
                if ( typeof(data.rst) != 'undefined' && data.rst != '' )
                {
                    $('#'+appendID).append(data.rst);
                    scrollObj.attr('page', page+1);
                    finished = false;
                }

                if ( data.hideBtn == true )
                {
                    $('#load-more').html('<p>'+ scrollObj.attr('txt') +'</p>');
                    finished = true;
                }
            }, 'json');
        }
    })
}
function a() {
    b(d, -f * e[0].offsetWidth);
}
function b(a, b) {
    clearInterval(a.timer), a.timer = setInterval(function() {
        var c = (b - i) / 8;
        c = c > 0 ? Math.ceil(c) : Math.floor(c), i == b ? clearInterval(a.timer) : (i += c,
            a.style.left = 0 > i ? i % g + "px" : (i % g - g) % g + "px");
    }, 30);
}
var c, d, e, f, g, h, i;
if ($(".authors-change")[0]) {
    for (c = $(".authors-change")[0], d = $(".recommend-authors-list")[0], e = d.children,
             d.innerHTML = d.innerHTML, d.style.width = e[0].offsetWidth * (e.length + 3) + "px",
             f = 0, g = d.offsetWidth / 2, h = 0; h < e.length; h++) !function(b) {
        e[h].onclick = function() {
            f % e.length != e.length - 1 && -1 != f % e.length || 0 != b || f++, 0 == f % e.length && b == e.length - 1 && f--,
                f = Math.floor(f / e.length) * e.length + b, a();
        };
    }(h);
    c.onclick = function() {
        f++, a();
    }, i = 0, $(".authors-change").on("click", function() {
        clearTimeout(a), $(".authors-change i").addClass("rotate");
        var a = function() {
            $(".authors-change i").removeClass("rotate");
        };
        setTimeout(a, 300);
    });
}