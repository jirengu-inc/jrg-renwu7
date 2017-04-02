define(['jquery'], function($) {
function everyCarousel($container) {
        this.$ct = $container;
        this.init();
        this.bind();
    }
    everyCarousel.prototype.init = function () {
        var $imgCt = this.$imgCt = this.$ct.find(".img-ct"),
            $items = this.$items = this.$imgCt.children(),
            $pre = this.$pre = this.$ct.find(".btn-pre"),
            $next = this.$next = this.$ct.find(".btn-next"),
            $bullet = this.$bullet = this.$ct.find(".bullet"),
            imgWidth = this.imgWidth = $items.width();
        this.curIdx = 0;
        this.isAnimate = false;
        this.imgCount = $imgCt.children().length;
        $imgCt.prepend($items.last().clone());
        $imgCt.append($items.first().clone());
        var imgRealCount = $imgCt.children().length;
        $imgCt.css({
            left: 0 - imgWidth,
            width: imgRealCount * imgWidth
        })
    };
    everyCarousel.prototype.bind = function () {
        this.autoplay();
        this.addEvent();
    };
    everyCarousel.prototype.playNext = function (idx) {
        var idx = idx || 1,
            _this = this;
        if (!this.isAnimate) {
            this.isAnimate = true;
            this.$imgCt.animate({left: "-=" + (idx * this.imgWidth)}, function () {
                _this.curIdx = (_this.curIdx + idx) % _this.imgCount;
                if (_this.curIdx == 0) {
                    _this.$imgCt.css("left", 0 - _this.imgWidth);
                }
                _this.isAnimate = false;
                _this.setBullet();
            })
        }
    };
    everyCarousel.prototype.playPre = function (idx) {
        var idx = idx || 1,
            _this = this;
        if (!this.isAnimate) {
            this.isAnimate = true;
            this.$imgCt.animate({left: "+=" + (idx * this.imgWidth)}, function () {
                _this.curIdx = (_this.curIdx - idx + _this.imgCount) % _this.imgCount;
                if (_this.curIdx == (_this.imgCount - 1)) {
                    _this.$imgCt.css("left", 0 - _this.imgCount * _this.imgWidth);
                }
                _this.isAnimate = false;
                _this.setBullet();
            })
        }
    };
    everyCarousel.prototype.setBullet = function () {
        this.$bullet.find("li").removeClass("active").eq(this.curIdx).addClass("active");
    };
    everyCarousel.prototype.autoplay = function () {
        var _this = this;
        clock = setInterval(function () {
            _this.playNext();
        }, 2000);
    };
    everyCarousel.prototype.addEvent = function () {
        var _this = this;
        this.$next.on("click", function () {
            _this.playNext();
        });
        this.$pre.on("click", function () {
            _this.playPre();
        });
        _this.$bullet.find("li").on("click", function () {
            var idx = $(this).index();
            if (idx > _this.curIdx) {
                _this.playNext(idx - _this.curIdx);
            } else if (idx < _this.curIdx) {
                _this.playPre(_this.curIdx - idx);
            }
        })
    };
    var Carousel = (function () {
        return {
            init: function ($containers) {
                $containers.each(function (idx, container) {
                    new everyCarousel($(container));
                })
            }
        }
    })();
  return Carousel;
});