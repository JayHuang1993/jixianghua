$(document).ready(function(){

    $('#myModal').on('shown.bs.modal', function (e) {
        var targetHeight = getTargetHeight();
//		alert(targetHeight);

        var video_play_div = $("#video_play");
        var thisTitle = $(e.relatedTarget).attr("title");
        $("#myModalLabel").html(thisTitle);

        video_play_div.html("<span style='text-align:center;display:block;font-size:18px;height:" + targetHeight + "px;margin-top:150px;'>视频正在加载...</span>");

        if (!chkFlash()) {
            video_play_div.html("<span style='text-align:center;display:block;font-size:18px;height:" + targetHeight + "px;margin-top:150px;'>您还没有安装flash播放器,请点击 <A href=\"http://www.adobe.com/go/getflash\" style=\"color:#55c5f3;\" target=_blank>这里</A> 安装</span>");
        } else {

            var thisSrc = $(e.relatedTarget).attr("data-src");

            if (thisSrc.indexOf('mp4') > 0) {
                video_play_div.html("<video id=\"video\" autoplay=\"autoplay\" controls=\"\" src=\"" + thisSrc + "\" allowFullScreen=\"true\" quality=\"high\" width=\"100%\" height=\"" + targetHeight + "\" align=\"middle\"></video>");
            } else {
                video_play_div.html("<embed id=\"video\" flashvars=\"isAutoPlay=true\" src=\"" + thisSrc + "\" allowFullScreen=\"true\" quality=\"high\" width=\"100%\" height=\"" + targetHeight + "\" align=\"middle\" allowScriptAccess=\"always\" type=\"application/x-shockwave-flash\"></embed>");
            }

        }
    });
	
	$('#myModal').on('hidden.bs.modal', function (e) {
		var targetHeight = getTargetHeight();
//		alert(targetHeight);
		
		var video_play_div = $("#video_play");
		if(!chkFlash()){
			video_play_div.html("<span style='text-align:center;display:block;font-size:18px;height:"+targetHeight+"px;margin-top:150px;'>您还没有安装flash播放器,请点击 <A href=\"http://www.adobe.com/go/getflash\" style=\"color:#55c5f3;\" target=_blank>这里</A> 安装</span>");
		}else{
			video_play_div.html("<span style='text-align:center;display:block;font-size:18px;height:"+targetHeight+"px;margin-top:150px;'>视频正在加载...</span>");
			
		}
	});

});

function getTargetHeight(){
	//得到当前窗口的宽度
	var theHeight = $(window).height();
	$('#myModal .modal-content').height(theHeight*0.7);
	var targetHeight = theHeight*0.7-86;
//	alert(targetHeight);
	return targetHeight;
}

function chkFlash() {
    var isIE = (navigator.appVersion.indexOf("MSIE") >= 0);
    var hasFlash = true;
 
    if(isIE) {
        try{
            var objFlash = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
        } catch(e) {
            hasFlash = false;
        }
    } else {
        if(!navigator.plugins["Shockwave Flash"]) {
            hasFlash = false;
        }
    }
    return hasFlash;
}
