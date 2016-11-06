/**
 * Created by zm on 2016/10/30.
 */
// waterFall.js

define(['jquery'],function($){
    function WaterFall($node) {
        this.$node = $node;
        this.init();
    }

    WaterFall.prototype = {
        init: function () {
            this.render(this.$node);
            this.bind(this.$node);
        },
        bind: function ($node) {
            var that = this;
            $(window).on("resize", function () {
                that.render($node);
            });
        },
        render: function ($node) {
            var containerWidth = $node.find(".projects-wrap").width();
            var $item = $node.find(".image-block");
            var itemWidth = $item.outerWidth(true);
            var colNum = parseInt(containerWidth / itemWidth);
            var colSumHeight = [];
            for (var i = 0; i < colNum; i++) {
                colSumHeight.push(0);
            }
            $item.each(function () {
                var $cur = $(this);
                var index = 0,
                    minHeight = colSumHeight[index];
                for (var j = 1; j < colSumHeight.length; j++) {
                    if (colSumHeight[j] < minHeight) {
                        index = j;
                        minHeight = colSumHeight[j];
                    }
                }
                $cur.css({
                    top: minHeight,
                    left: itemWidth * index
                });
                colSumHeight[index] += $cur.outerHeight(true);
            });
            $node.find(".projects-wrap").css({height:Math.max.apply(null,colSumHeight)});
        }
    };
    return {
        init:function ($node) {
            new WaterFall($node);
        }
    }
});
