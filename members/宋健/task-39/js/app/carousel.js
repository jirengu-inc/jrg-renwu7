/*
 无缝滚动轮播
 */

/*
define(['jquery'],function($){
    function Carousel($ele){
        this.$ele = $ele;
        this.$imgList = this.$ele.find('.imglist');
        this.$items = this.$imgList.children();
        this.$prev = this.$ele.find('.prev');
        this.$next = this.$ele.find('.next');
        this.$jumpSec = this.$ele.find('.jumpto');
        $lastimg = this.$items.last().clone();
        $firstimg = this.$items.first().clone();
        this.$imgList.prepend($lastimg).append($firstimg);
        this.init();
        this.autoPlay();
    }
    Carousel.prototype = {
        init:function(){
            this.imgWidth = this.$items.width();
            this.imgCount = this.$items.length;
            imgRealCount = this.$imgList.children().length;
            this.$imgList.css({
                left:0-this.imgWidth,
                width:imgRealCount*this.imgWidth});
            this.curIdx = 0;
            this.inProcess = false;
            this.bind();
        },
        bind:function(){
            var _this = this;
            this.$prev.on('click',function(){
                _this.playPrev();
            });
            this.$next.on('click',function(){
                _this.playNext();
            });
            this.$jumpSec.find('li').on('click',function(){
                var idx = $(this).index();
                if(idx>_this.curIdx){
                    _this.playNext(idx-_this.curIdx);
                }
                if(idx<_this.curIdx){
                    _this.playPrev(_this.curIdx-idx);
                }
            });
            $(window).on('resize',function(){
                _this.init();
            })
        },
        playPrev:function(idx){
            var idx = idx ||1,
                _this= this;
            if(!this.inProcess){
                this.inProcess = true;
                this.$imgList.animate({left:'+='+(_this.imgWidth*idx)},function(){
                    _this.curIdx = (_this.imgCount+_this.curIdx-idx)%_this.imgCount;
                    if(_this.curIdx === (_this.imgCount-1)){
                        _this.$imgList.css({left:0-_this.imgWidth*_this.imgCount});
                    }
                    _this.inProcess = false;
                    _this.jumpTo();
                })
            }
        },
        playNext:function(idx){
            var idx = idx ||1,
                _this= this;
            if(!this.inProcess){
                this.inProcess = true;
                this.$imgList.animate({left:'-='+(_this.imgWidth*idx)},function(){
                    _this.curIdx = (_this.imgCount+_this.curIdx+idx)%_this.imgCount;
                    if(_this.curIdx === 0){
                        _this.$imgList.css({left:0-_this.imgWidth});
                    }
                    _this.inProcess = false;
                    _this.jumpTo();
                })
            }
        },
        jumpTo:function(){
            this.$jumpSec.find('li').removeClass('active').eq(this.curIdx).addClass('active');
        },
        autoPlay:function(){
            var _this = this;
            this.clock = setInterval(function(){
                _this.playNext();
            },5000)
        },
        stopPlay:function(){
            var _this = this;
            clearInterval(_this.clock);
        }
    };
    return Carousel;
});
 */





/*
淡入淡出轮播
 */

define(['jquery'],function($){
    function Carousel($ele) {
        this.$ele = $ele;
        this.$imgList = this.$ele.find('.imglist');
        this.$items = this.$imgList.children();
        this.$prev = this.$ele.find('.prev');
        this.$next = this.$ele.find('.next');
        this.$jumpSec = this.$ele.find('.jumpto');
        this.imgCount = this.$items.length;
        this.init();
        this.play(0);
        this.autoPlay();
    }
    Carousel.prototype ={
        init:function(){
            this.curIdx = 0;
            this.inProcess = false;
            this.bind();
        },
        bind:function(){
            var _this = this;
            this.$prev.on('click',function(){
                _this.playPrev();
            });
            this.$next.on('click',function(){
                _this.playNext();
            });
            this.$jumpSec.find('li').on('click',function(){
                var idx = $(this).index();
                _this.play(idx);
            });
        },
        play:function(idx){
            var _this = this;
            if(this.inProcess){
                return;
            }
            this.inProcess = true;
            this.$items.eq(_this.curIdx).fadeOut(1200);
            this.$items.eq(idx).fadeIn(1200,function (){
                _this.inProcess = false;
            });
            this.curIdx = idx;
            this.jumpTo();
        },
        playNext:function(){
            this.play((this.curIdx+1)%this.imgCount);
        },
        playPrev:function(){
            this.play((this.curIdx-1)%this.imgCount);
        },
        jumpTo:function(){
            this.$jumpSec.find('li').removeClass('active').eq(this.curIdx).addClass('active');
        },
        autoPlay:function(){
            var _this = this;
            this.clock = setInterval(function(){
                _this.playNext();
            },5000)
        }
    };
    return Carousel;
});

