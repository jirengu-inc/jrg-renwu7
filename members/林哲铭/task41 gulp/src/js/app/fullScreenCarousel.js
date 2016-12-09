/**
 * Created by zm on 2016/10/29.
 */
// Carousel  
define(['jquery'],function($){
	var Carousel = function ($node) {
		var $ct =this.$ct = $node.find(".carousel-img-ct");
		this.$items = $ct.children();
		this.$next = $node.find(".carousel-next");
		this.$pre = $node.find(".carousel-pre");
		this.$bullet = $node.find(".carousel-bullet");
		this.imgWidth = $(window).width();
		this.imgCount = this.$items.length + 2;
		this.isAnimate = false;
		this.clone = false;
		this.curIdx = 1;
		this.init();
	};
	Carousel.prototype = {
		init: function () {
			var that = this;
			this.firstSet();
			this.prepare();
			this.autoPlay();
			$(window).on("resize",function () {
				that.prepare(that);
			});
			this.$bullet.on("click","li",function () {
				var idx = $(this).index();
				that.play(idx+1);
				that.setImg(idx-1);
			});
			this.$next.on("click",function () {
				that.playNext();
			});
			this.$pre.on("click",function () {
				that.playPre();
			})
		},
		firstSet:function () {
			this.setImg(0);
			this.setImg(1);
			this.setImg(this.$items.length-1);
		},
		prepare: function (_this) {
			var that = _this||this;
			var $ct = that.$ct,
				$items = $ct.children();
			that.imgWidth = $(window).width();
			$items.width(that.imgWidth);
			if(!that.clone){
				$ct.append($items.first().clone());
				$ct.prepend($items.last().clone());
				that.clone = true;
			}
			$ct.width(that.imgCount*that.imgWidth);
			$ct.css({left: -that.imgWidth*that.curIdx});
		},
		setBullet: function() {
			this.$bullet.children().removeClass("active")
				.eq(this.curIdx-1).addClass("active");
		},
		play:function (idx) {
			var that = this;
			if(this.isAnimate) return;
			this.isAnimate = true;
			this.setImg(this.curIdx+1);
			if( idx == 0){
				this.curIdx = this.imgCount-2;
			}else if(idx == this.imgCount-1){
				this.curIdx = 1;
			}else{
				this.curIdx = idx;
			}
			this.$ct.animate({left:-this.imgWidth*idx},400,function () {
				that.isAnimate = false;
				that.$ct.css("left",-that.imgWidth*that.curIdx);
			});
			this.setBullet();
		},
		autoPlay: function () {
			var that = this;
			clock = setInterval(function () {
				that.playNext();
			},4000);
		},
		playNext: function () {
			this.play((this.curIdx + 1)% this.imgCount);
		},
		playPre: function () {
			this.play((this.curIdx + this.imgCount - 1)% this.imgCount)
		},
		setImg: function(idx) {    //懒加载
			var $node = this.$items.eq(idx),
				$cover = $node.find(".carousel-cover"),
				$imgUrl =$cover.attr('data-bg-img');
			if ($node.data("isSet")) return;
			$node.css("background-image",'url(' + $imgUrl + ')');
			$node.data('isBgSet',true);
		}
	};
	return {
		init:function ($node) {
			new Carousel($node);
		}
	}
});
