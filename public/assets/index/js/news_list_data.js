$(document).ready(function(){

	getNewsListData('current');//首次加载

	$('.next_able').mouseover(function(){
		$(this).not(".next_disable").attr('src','images/new/news/next_active.png');
	});
	$('.next_able').mouseout(function(){
		$(this).not(".next_disable").attr('src','images/new/news/next.png');
	});
	
	$('.prev_able').mouseover(function(){
		$(this).not(".prev_disable").attr('src','images/new/news/prev_active.png');
	});
	$('.prev_able').mouseout(function(){
		$(this).not(".prev_disable").attr('src','images/new/news/prev.png');
	});
	
});

/**
 * 新闻页数据请求函数
 */

var isLoading = false;
var isLast = false;
var currentPage = 1;//页码

function getNewsListData (action){

	if(isLoading){
		return;
	}
	
	if(action == 'prev'){
		
		if(currentPage<=1){
			queryPage = 1;
		}else{
			queryPage = currentPage-1;
		}
		
	}else if(action == 'next'){
		queryPage = currentPage+1;
	}else if(action == 'current'){
		queryPage = currentPage;
	}else{
		return;
	}
	
	isLoading = true;

	$.ajax({
		type: 'POST',
		url: "getNewsListData.php?p="+queryPage,
		timeout: 10000,//10秒超时
		success: function(data){
			var prev_img = $("#prev_div img");
			
			var next_img = $("#next_div img");
			
			if(data.stat==1){
				//正常返回
				$("#news_info_list").html(data.data);
				
				if(data.isLast){
					//最后一页
					next_img.attr('src','images/new/news/next_disable.png');
					next_img.attr('onclick','');
					next_img.attr('class','next_disable');
					
					//标识
					isLast = true;
					
				}else{
					
					//不是最后一页,当且仅当 请求前是最后一页时,更改按钮
					if(isLast){
						next_img.attr('src','images/new/news/next.png');
						next_img.attr('onclick','getNewsListData("next")');
						next_img.attr('class','next_able');
						isLast = false;
					}
					
				}
				
				if(queryPage == 1){
					//第一页
					prev_img.attr('src', 'images/new/news/prev_disable.png');
					prev_img.attr('onclick', '');
					prev_img.attr('class','prev_disable');
				}else{
					
					//不是第一页时,当且仅当 请求前是第一页时,更改按钮
					if(currentPage == 1){
						prev_img.attr('src', 'images/new/news/prev.png');
						prev_img.attr('onclick', 'getNewsListData("prev")');
						prev_img.attr('class','prev_able');
					}
					
				}
				
				currentPage = queryPage;
				
				
			}else if(data.stat==2){
				//数据查询失败
				$("#news_info_list").html("<div>抱歉,数据加载失败,请刷新重试</div>");
			}
			
			isLoading=false;
		},
		error: function(XMLHttpRequest, textStatus, errorThrown){
			
			$("#news_info_list").html("<div>抱歉,数据加载出错了,请刷新重试</div>");
			
			if(textStatus=='timeout'){
				$("#news_info_list").html("<div>抱歉,数据加载超时,请刷新重试</div>");
				isLoading=false;
			}
			
		}, 
		dataType: 'json'
	});
}