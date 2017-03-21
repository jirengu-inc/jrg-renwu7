define(['jquery'],function($){
	var goTop = (function(){
		function init(){
			if(!arguments.length){
				new gotop();
			}else{
				new gotop(arguments[0])
			}
		}
		function gotop($node){
			var $gotop = this.$gotop = $node || $("<div class='gotop'>回到顶部</div>");
			$gotop.hide();
			$("body").append($gotop);
			this.bind();
		}
		gotop.prototype = {
			bind:function(){
				var _this = this;
				$(document).on("scroll",function(){
					var ScrollH = $(window).scrollTop();
					if(ScrollH > 100){
						_this.$gotop.show();
					}else{
						_this.$gotop.hide();
					}
				})

				this.$gotop.on("click",function(){
					$(window).scrollTop(0)
				})
			}
		}
		return {
			init:init
		}
		
	})();
	return goTop;
})