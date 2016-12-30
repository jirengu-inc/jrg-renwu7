define(['jquery'], function($){
function Exposure($el){
	this.$el = $el;
	this.clock = false;
	this.bind();
}

Exposure.prototype = {
	init: function(){
		this.bind();
	},
	bind: function(){
		var the = this;
		$(window).on('scroll',function(){
			if(the.clock){
				clearTimeout(the.clock);
			}
			the.clock = setTimeout(function(){
				the.checkShow();
			},100)
		})
	},
	isShow: function($el){
		var winH = $(window).height(),
			scrollH = $(window).scrollTop(),
			offH = $el.offset().top;
		if(offH < winH + scrollH){
			return true;
		}else{
			return false;
		}
	},
	checkShow: function(){
		var the = this;
		this.$el.each(function(){
			var $cur = $(this);
			if(the.isShow($cur)){
				the.exposure($cur);
			}
		});
	},
	exposure: function($el){
		$el.animate({'opacity': 1},600);
	}

};

	return {
		init: function($el){
			new Exposure($el);
		}
	}
});