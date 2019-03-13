$(function() {
    //展开关闭职位要求详情
    $('.work-info-box').each(function() {
        var $this = $(this);
        $this.find('.work-infoImg').addClass('more-infoImg');

        $this.find('.work-info-cnt').click(function() {
            $this.toggleClass('open_wrap');
            $this.find('.work-infoImg').toggleClass('less-infoImg');
        });
    });
    //激活样式
    $('.select-wrap').each(function() {
        var $$this = $(this);
        $$this.find('.work-place').each(function() {
            $(this).click(function() {
                $(this).siblings().removeClass('item-act');
                $(this).addClass('item-act');
            });
        });
        $$this.find('.work-type').each(function() {
            $(this).click(function() {
                $(this).siblings().removeClass('item-act');
                $(this).addClass('item-act');
            });
        });
    });
    //筛选逻辑
    $('.work-place,.work-type').click(function() {
        //点击内部获取当前激活状态
        var placeSelectActive = $('.work-place-select .item-act').data('classtype');
        var typeSelectActive = $('.work-type-select .item-act').data('classtype');

        //组合激活class选择字符串
        var activeClassStr = placeSelectActive + typeSelectActive;

        //一开始全部隐藏
        $('.work-info-box').addClass('work_info_box_hide').removeClass('open_wrap').find('.work-infoImg').removeClass('less-infoImg');

        if (!activeClassStr) {
            $('.work-info-box').removeClass('work_info_box_hide');
        } else {
            //展示后开始筛选
            $(activeClassStr).removeClass('work_info_box_hide');
        }

        //是否显示空提示
        //全部box
        var infobox_len = $('.work-info-box').length;
        //隐藏box
        var infobox_hide_len = $('.work-info-box.work_info_box_hide').length;
        if (infobox_len == infobox_hide_len) {
			$('.work-info-box-empty').show();
        }else{
			$('.work-info-box-empty').hide();
		}
    });

});