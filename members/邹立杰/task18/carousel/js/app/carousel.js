define(['jquery'],function($){
	
	var Carousel = (function(){
		function init($arr){
			$arr.each(function(){
				new _Carousel($(this));
			});
		}
		function _Carousel($node){
			var winWidth = this.winWidth = $(window).width();
			var $node = this.$node = $node;
			var $ct = this.$ct = $node.find(".ct");
			this.$prev = $node.find(".prev");
			this.$next = $node.find(".next");
			this.$bullet = $node.find(".bullet");
			// this.imgWidth = $node.find("li").width();
			this.imgSize = $node.find("li").size();

			$ct.children().css({'width':winWidth})
			// $node.css({'width':this.imgWidth})
			$ct.css({"width":this.winWidth*this.imgSize});

			this.bind();
			// this.autoPlay()
		}

		_Carousel.prototype = {
			bind:function(){
				var _this = this;
				this.$prev.on("click",function(){
					_this.showPrev()
				})
				this.$next.on("click",function(){
					_this.showNext()
				});
			},
			showPrev:function(){
				this.$ct.prepend( this.$ct.children().last() );
				this.$ct.css({'left':0-this.winWidth});
				this.$ct.animate({
					"left":0
				});

			},
			showNext:function(){
				var $ct = this.$ct;
				$ct.animate({
					'left':0-this.winWidth
				},function(){
					$ct.append( $ct.children().first() );
					$ct.css("left",0)
				})
			},
			autoPlay:function(){
				var _this = this;
				this.clock = setInterval(function(){
					_this.showNext();
				},4000);
			},
			stopPlay:function(){
				clearInterval(this.clock)
			}


		}
		return {
				init:init
			}
	})();
	return  Carousel;
})