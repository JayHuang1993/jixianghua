$(document).ready(function(){


	$("#video_next").click(function(){
		if(!is_moving()){
			scroll_left();
		}
	});
	
	$("#video_prev").click(function(){
		if(!is_moving()){
			scroll_right();
		}
	});
	var old_html = '';
	$("#listVideo .item").hover(
			function(){
				$(this).prepend(function(index,html){
					old_html = html;
					return '<img src="images/new/news/play_btn.png" style="z-index:1020;top: 55px;left: 85px;position:absolute;" /><div style="top: 0;right: 0;bottom: 0;left: 0;position:absolute;filter:alpha(opacity=70);opacity:0.7;background:#000;"></div>';
				});
			},function(){
				$(this).html(old_html);
			}
	);

});

var index = 0;//初始下标
var pic_num = 4;
var scroll_percent = 1/pic_num;

function scroll_left(){
	var video_el = $("#listVideo .item");
	
	/*
	 * 开始模拟动画
	 */
	
	var temp_index = index;//初始图片,也是要移除的图片
	
    //计算下标
    var index_arr = new Array();
    index_arr[0] = temp_index;
    for(var i = 1;i<=pic_num;i++){
    	
    	temp_index = temp_index + 1;
    	
    	if(temp_index == video_el.length){
    		temp_index = 0;
    	}
    	
    	
    	index_arr[i] = temp_index;
    	
    	if(i==pic_num){
    		//最后一个,也是需要加入的新图片,提前将元素放置在右边
    	    video_el.eq(temp_index).stop(true, false).animate({ "left": "100%"}, 0 ,function(){
    	    	$(this).addClass('active next');
    	    	});
    	}else{
    		thisScrollPosition = String(i*scroll_percent*100);
    	    video_el.eq(temp_index).stop(true, false).animate({ "left": thisScrollPosition+"%"}, 0 ,function(){
    	    	$(this).addClass('next');
    	    	});
    	}
    	
    }
    
    index = index_arr[1];//完成轮播后的第一张图
    
    //向左滑动
    for(x in index_arr){
    	thisIndex = index_arr[x];
//    	alert(thisIndex);
    	
    	if(x==0){
	    	thisScrollPosition = String(-scroll_percent*100);
	        video_el.eq(thisIndex).animate({ "left": thisScrollPosition+'%' }, 600 ,function(){
	        	$(this).attr("style",'');
	        	$(this).removeClass('active');
	        	$(this).removeClass('next');
        	});
    	}else if(x==1){
    		thisScrollPosition = String((x-1)*scroll_percent*100);
    		video_el.eq(thisIndex).animate({ "left": thisScrollPosition+'%' }, 600 ,function(){
    			$(this).attr("style",'');
        		$(this).removeClass('next');
    		});
    	}else{
    		thisScrollPosition = String((x-1)*scroll_percent*100);
    		video_el.eq(thisIndex).animate({ "left": thisScrollPosition+'%' }, 600 ,function(){
//    			$(this).attr("style",'');
//        		$(this).removeClass('next');
    		});
        }
    }   
}

function scroll_right(){
	var video_el = $("#listVideo .item");
	
	/*
	 * 开始模拟动画
	 */
	
	var temp_index = index;//第一张图片
	
    //计算下标
    var index_arr = new Array();
    
    //要加入的图片下标
    if(temp_index==0){
    	index_arr[0] = video_el.length-1;
    }else{
    	index_arr[0] = temp_index-1;
    }
    
	//需要加入的新图片,提前将元素放置在右边
    video_el.eq(index_arr[0]).stop(true, false).animate({ "left": "-25%"}, 0 ,function(){
    	$(this).addClass('active next');
    	});
    
    index_arr[1] = temp_index;
    
    
    for(var i = 2;i<=pic_num;i++){
    	
    	temp_index = temp_index + 1;
    	
    	if(temp_index == video_el.length){
    		temp_index = 0;
    	}
    	
    	index_arr[i] = temp_index;
    	
		thisScrollPosition = String((i-1)*scroll_percent*100);
	    video_el.eq(temp_index).stop(true, false).animate({ "left": thisScrollPosition+"%"}, 0 ,function(){
	    	$(this).addClass('next');
	    	});
    	
    }
    
    index = index_arr[0];//完成轮播后的第一张图
//    alert(index);
    //向右滑动
    for(x in index_arr){
    	thisIndex = index_arr[x];
//    	alert(thisIndex);
    	
    	thisScrollPosition = String(x*scroll_percent*100);
    	
    	if(x==1){
	        video_el.eq(thisIndex).animate({ "left": thisScrollPosition+'%' }, 600 ,function(){
	        	$(this).addClass('next');
        	});
    	}else if(x==0){
    		video_el.eq(thisIndex).animate({ "left": thisScrollPosition+'%' }, 600 ,function(){
    			$(this).attr("style",'');
        		$(this).removeClass('next');
    		});
    	}else if(x==pic_num){
    		video_el.eq(thisIndex).animate({ "left": thisScrollPosition+'%' }, 600 ,function(){
	        	$(this).attr("style",'');
	        	$(this).removeClass('active');
	        	$(this).removeClass('next');
    		});
    	}else{
    		video_el.eq(thisIndex).animate({ "left": thisScrollPosition+'%' }, 600 ,function(){
//    			$(this).attr("style",'');
//        		$(this).removeClass('next');
    		});
        }
    }
}

//检查是否在移动
function is_moving(){
	var video_el_num = $("#listVideo .item:animated").length;
	if(video_el_num>0){
		return true;
	}else{
		return false;
	}
}
