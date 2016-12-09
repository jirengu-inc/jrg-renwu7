/**
 * Created by zm on 2016/10/30.
 */
//exposure
define(['jquery'],function($) {
    function Exposure($node) {
        this.$node = $node;
        this.clock = false;
        this.init();
    }

    Exposure.prototype = {
        init: function () {
            this.bind();
        },
        bind: function () {
            var that = this;
            $(window).on("scroll", function () {
                if (that.clock) {
                    clearTimeout(that.clock);
                }
                that.clock = setTimeout(function () {
                    that.checkShow();
                }, 100);
            });
        },
        checkShow: function () {
            var that = this;
            this.$node.each(function () {
                var $cur = $(this);
                if ($cur.attr("isLoading")) {
                    return;
                }
                if (that.isShow($cur)) {
                    that.exposure($cur);
                }
            });
        },
        isShow: function ($node) {
            var scrollHeight = $(window).scrollTop();
            var winHeight = $(window).height();
            var itemTop = $node.offset().top;
            return itemTop < scrollHeight + winHeight;
        },
        exposure: function ($node) {
            $node.animate({opacity: 1}, 1000);
        }
    };
   return {
       init:function ($node) {
           new  Exposure($node);
       }
   }
});