/**
 * Created by zm on 2016/10/29.
 */
// goTop
define(['jquery'],function ($) {
    
	var $goTop = $('<div class="go-top">回到顶部</div>');
	$('body').append($goTop);
	$goTop.hide();

	function init (){
		$(window).on('scroll', function(){
			var offsetTop = $('body').scrollTop();
			if(offsetTop>100){
				$goTop.show();
			}else{
				$goTop.hide();
			}
		});
		$goTop.on('click', function(){
			$(window).scrollTop(0);
		});

	}
	return {
		init: init
	}    
});
