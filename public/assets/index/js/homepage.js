$(document).ready(function(){

	//检查是否支持css3属性
//	isSupportTransition = supportCss3('transition');
//	isSupportTransform	= supportCss3('transform');
//	if(isSupportTransition&&isSupportTransform){
//		//主图轮播
//		$('.pics_div').carousel({
//			  interval: 4000,
//			  pause : 'no'
//			});
//		$('.pics_div').carousel('cycle');
//		
//		$('.pics_div').on('slide.bs.carousel', function () {
//			
//			$('.word_div').carousel('next');
//			
//			});
//	}else{
		setInterval("scroll()",4000);
//	}

});

var index = 0;//初始下标

function scroll(){
	var pic_inner = $(".pics_div .carousel-inner");
	var pic_inner_el = $(".pics_div .carousel-inner .item");
	
	var word_inner = $(".word_div .carousel-inner");
	var word_inner_el = $(".word_div .carousel-inner .item");
	
	/*
	 * 开始模拟动画
	 */
	
	//先将要出现的元素的下标
	var old_index = index;
    index += 1;
    if (index == pic_inner_el.length) { index = 0; }
    
    //将元素放置在右边
    pic_inner_el.eq(index).stop(true, false).animate({ "left": "100%"}, 0 ,function(){
    	$(this).addClass('active next');
    	});
    word_inner_el.eq(index).stop(true, false).animate({ "left": "100%","opacity": "1"}, 0 ,function(){
    	$(this).addClass('active next');
	});
    
    //向左滑动
    pic_inner_el.eq(index).animate({ "left": "0" }, 600 ,function(){
//    	alert(1);
    	$(this).removeClass('next');
	});
    word_inner_el.eq(index).animate({ "left": "0" }, 600 ,function(){
    	$(this).removeClass('next');
	});
    
    pic_inner_el.eq(old_index).animate({ "left": "-100%" }, 600 ,function(){
//    	alert(2);
    	$(this).removeClass('active');
	});
    word_inner_el.eq(old_index).animate({ "opacity": "0" }, 600 ,function(){
    	$(this).removeClass('active');
	});
    
    
    


}

function supportCss3(style) {  
    var prefix = ['webkit', 'Moz', 'ms', 'o'],  
    i,  
    humpString = [],  
    htmlStyle = document.documentElement.style,  
    _toHumb = function (string) {  
    return string.replace(/-(\w)/g, function ($0, $1) {  
    return $1.toUpperCase();  
    });  
    };  
       
    for (i in prefix)  
    humpString.push(_toHumb(prefix[i] + '-' + style));  
       
    humpString.push(_toHumb(style));  
       
    for (i in humpString)  
    if (humpString[i] in htmlStyle) return true;  
       
    return false;  
} 