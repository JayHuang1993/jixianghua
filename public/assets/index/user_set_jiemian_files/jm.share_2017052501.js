var jm_default_config = {
		link		: encodeURIComponent(window.location.href),
		title		: $('title').html() ? $('title').html() : '',
		before		: '',
		summary		: $('meta[name="description"]').attr('content') ? $('meta[name="description"]').attr('content') : '',
		imageUrl	: 'https://img.jiemian.com/static/jmw/image/logoh.gif',
		WeixinUrl	: encodeURIComponent(window.location.href).replace(document.location.host, 'm.jiemian.com'),
		WeixinSuccessUrl : '',
		SinaSource	: 'jiemian',
		SinaAppkey	: '2254771841'
	}

if ( typeof jm_config == 'undefined' ) var jm_config = {};
if ( jm_config.imageUrl && navigator.userAgent.toLowerCase().match(/MicroMessenger/i) == "micromessenger" )
{
	jm_config.imageUrl = jm_config.imageUrl.replace(/_a([0-9]+x[a-zA-Z0-9]+)/, '_a300x300');
}
cfg = $.extend({}, jm_default_config, jm_config);

// sina分享
$('.jm_sina').click(function() {
	var jm_share_title = cfg.before +'【'+ cfg.title +'】'+ cfg.summary;
	// 拼接@用户
	if (typeof($(this).attr('data')) != 'undefined' && $(this).attr('data') != '')
	{
		jm_share_title += '...'+$(this).attr('data');
	}
	var _sina_url = 'http://service.weibo.com/share/share.php?title='+ jm_share_title +'&url='+ cfg.link +'&source='+ cfg.SinaSource +'&appkey='+ cfg.SinaAppkey +'&pic='+ cfg.imageUrl +'&searchPic=false&relateUid=';

	addShareNumber(this, $(this).attr('url'));
	window.open(_sina_url);
});

// QQ好友分享
$('.jm_qq').click(function() {
	var _jm_site = 'jiemian';
	var _QQ_share_url = 'http://connect.qq.com/widget/shareqq/index.html?url='+ cfg.link +'&showcount=0&desc='+ cfg.summary +'&summary='+ cfg.summary +'&title='+ cfg.title +'&site='+_jm_site+'&pics'+ cfg.imageUrl;

	addShareNumber(this, $(this).attr('url'));
	window.open(_QQ_share_url);
});

// QQ空间
$('.jm_qzone').click(function() {
	var _jm_desc = '';
	if (typeof($(this).attr('data')) != 'undefined' && $(this).attr('data') != '')
	{
		_jm_desc += $(this).attr('data');
	}

	var _Qzone_share_url = 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url='+ cfg.link +'&title='+ cfg.title +'&pics='+ cfg.imageUrl +'&summary='+ cfg.summary +'&desc='+ _jm_desc;
	addShareNumber(this, $(this).attr('url'));
	window.open(_Qzone_share_url);
});

// QQ微博
$('.jm_qq_weibo').click(function() {
	var _jm_QQ_weibo_title = encodeURIComponent(cfg.before +'【'+ cfg.title +'】'+ cfg.summary);
	var _jm_QQ_appkey = '';
	var _jm_site = '';

	if (typeof($(this).attr('data')) != 'undefined' && $(this).attr('data') != '')
	{
		_jm_QQ_weibo_title += '...'+$(this).attr('data');
	}
	var _Qweibo_share_url = 'http://share.v.t.qq.com/index.php?c=share&a=index&title='+_jm_QQ_weibo_title+'&url='+ cfg.link +'&appkey='+_jm_QQ_appkey+'&site='+_jm_site+'&pic='+ cfg.imageUrl;

	addShareNumber(this, $(this).attr('url'));
	window.open(_Qweibo_share_url);
});

// 微信分享
$('.jm_weixin').click(function() {
	var l = ($(window).width() - 360) / 2;
	var t = ($(window).height() - 360 - 60) / 3;
	var html = '';
	$('.share-css').remove();
	$('.jm_weixin_win').remove();
	html += '<div class="jm_weixin_win"><div class="jm_weixin_header"><h3>分享到微信朋友圈</h3><span class="jm_winxin_close">X</span>';
	html +=	'</div><div class="jm_webchat"><img src="http://s.jiathis.com/qrcode.php?url='+ cfg.WeixinUrl +'" width="220" height="220" alt="二维码加载失败...">';
	html += '</div><div class="jm_weixin_footer">打开微信，使用 “扫一扫” 即可将网页分享到我的朋友圈。</div></div>';
	$('body').append(html);
	$('.jm_weixin_win').css({
		'left' : l+'px',
		'top' : t+'px'
	});

	addShareNumber(this, $(this).attr('url'));
});

// 关闭微信弹窗
$('body').on('click','.jm_winxin_close', function() {
	$('.jm_weixin_win').remove();
});

function addShareNumber(obj, url) {
	if ($(obj).attr('share') == 'true')
	{
		$.get(url, {}, function(data) {
			$(obj).attr('share', 'false');
		}, 'jsonp');
	}
}

var ua = navigator.userAgent.toLowerCase();

if( ua.match(/MicroMessenger/i) == "micromessenger" ) {
	var wconUrl = '//a.jiemian.com/mobile/index.php?m=article&a=wcon';

	$('body').prepend('<script src="//res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>');

	$.get(wconUrl, {url : encodeURIComponent(window.location.href)}, function(data) {
		wx.config({
			debug: false,
			appId: data.cfg.appId,
			timestamp: data.cfg.timestamp,
			nonceStr: data.cfg.nonceStr,
			signature: data.cfg.signature,
			jsApiList: [
			  // 所有要调用的 API 都要加到这个列表中
			  'onMenuShareAppMessage', 'onMenuShareTimeline'
			]
		});

		wx.ready(function () {
			// 分享给朋友
			wx.onMenuShareAppMessage({
				title	: cfg.title, // 分享标题
				desc	: cfg.summary, // 分享描述
				link	: window.location.href, // 分享链接
				imgUrl	: cfg.imageUrl, // 分享图标
				type	: '', // 分享类型,music、video或link，不填默认为link
				dataUrl	: '', // 如果type是music或video，则要提供数据链接，默认为空
				// 用户确认分享后执行的回调函数
				success	: function () {
					if ( cfg.WeixinSuccessUrl ) $.getJSON( cfg.WeixinSuccessUrl );
				},
				// 用户取消分享后执行的回调函数
				cancel	: function () {
					alert(window.location.href);
				}
			});

			// 分享到朋友圈
			wx.onMenuShareTimeline({
				title	: cfg.title, // 分享标题
				desc	: cfg.summary, // 分享描述
				link	: window.location.href, // 分享链接
				imgUrl	: cfg.imageUrl, // 分享图标
				// 用户确认分享后执行的回调函数
				success	: function () {
					if ( cfg.WeixinSuccessUrl ) $.getJSON( cfg.WeixinSuccessUrl );
				},
				// 用户取消分享后执行的回调函数
				cancel	: function () {}
			});
		});

	}, 'jsonp');
}
