/**
 * Created by zm on 2016/10/30.
 */
// stickup

define(['jquery'],function($){
    var Stickup = function ($node) {
        this.$node = $node;
        this.clock = false;
        this.init();
    };
    Stickup.prototype = {
        init:function(){
            this.initPosition();
            this.bind(this.$node);
        },
        initPosition:function () {
            this.navLong = $("#nav").height();
            this.serviceBlockHeight = $("#service").offset().top;
            this.protfolioBlockHeight = $("#protfolio").offset().top;
            this.aboutBlockHeight = $("#about").offset().top;
            this.teamBlockHeight = $("#team").offset().top;
            this.brandBlockHeight = $("#brand").offset().top;
        },
        bind:function($node){
            var that = this;
            $(window).on("scroll",function () {
                if(that.clock){
                    clearTimeout(that.clock);
                }
                that.clock = setTimeout(function () {
                    that.judge();
                    if(!that.span){
                        $node.removeClass("nav-bar-change");
                        $node.find("li").find("a").removeClass("nav-bar-active");
                    }else {
                        $node.addClass("nav-bar-change");
                        $node.find("li").find("a").removeClass("nav-bar-active");
                        $node.find("li").eq(that.span - 1).find("a").addClass("nav-bar-active");
                    }
                },100);
            });
            $node.on("mouseenter","li",function () {
                $node.find("li").find("a").removeClass("nav-bar-active");
            });
            $node.on("mouseleave",function () {
                $node.find("li").eq(that.span-1).find("a").addClass("nav-bar-active");
            })
        },
        judge:function () {
            var windowScroll = $(window).scrollTop();
            if(windowScroll<this.serviceBlockHeight - this.navLong){
                this.span = 0;
            }else if(windowScroll<this.protfolioBlockHeight - this.navLong){
                this.span = 1;
            }else if(windowScroll<this.aboutBlockHeight+ - this.navLong){
                this.span = 2;
            }else if(windowScroll<this.teamBlockHeight - this.navLong){
                this.span = 3;
            }else if(windowScroll<this.brandBlockHeight - this.navLong){
                this.span = 4;
            }else{
                this.span = 5;
            }
        }
    };
    return {
        init:function ($node) {
            new Stickup($node);
        }
    }
});
