define(['jquery'],function($){
	var Exposure = (function(){
		function init($ele){
			console.log($ele)
			$ele.each(function(){
				new _do($(this));
			})
		}
		function _do($ele){
			var clock ;
			var $node = $ele;
			$(window).on("scroll",function(){
				if(clock){
					clearTimeout(clock);
				}
				clock = setTimeout(function(){
					checkShow($node);
				},400)
			})
			
		}
		function checkShow($ele){
			if(isShow($ele)){
				// $ele.show()
				console.log("show");
			}
		}
		function isShow($ele){
			var winH = $(window).height(),
				scrollTop = $("body").scrollTop(),
				eleTop = $ele.offset().top;
				if(eleTop < winH + scrollTop){
					return true;
				}else{
					return false;
				}
		}
		return {
			init:init
		}
	})();
	return Exposure;

});