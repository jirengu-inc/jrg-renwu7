(function ($){
        $.fn.extend({
            "carousel":function () {
                var $ct = $(this).find(".image-ct"),
                    $items = $ct.children(),
                    $next = $(this).find(".next"),
                    $pre = $(this).find(".pre"),
                    $bullet = $(this).find(".bullet");
                    imgWidth = $ct.find("img").width();
                    imgCount = $ct.find("img").length + 2;
                var isAnimate = false;
                var curIdx = 1;
                var clock;
                $ct.prepend($items.eq($items.length - 1).clone());
                $ct.append($items.eq(0).clone());
                $ct.width(imgWidth * imgCount);
                $ct.css("left", -imgWidth);
                $next.on("click", function () {
                    playNext();
                });
                $pre.on("click", function () {
                    playPre();
                });
                $bullet.on("click", "li", function () {
                    var idx = $(this).index();
                    play(idx + 1);
                });

                play(curIdx);
                autoPlay();


                function setBullet() {
                    $bullet.children().removeClass("active")
                            .eq(curIdx - 1).addClass("active")
                }

                function play(index) {
                    if (isAnimate) return;
                    isAnimate = true;
                    if (index == 0) {
                        curIdx = imgCount - 2;
                    } else if (index == imgCount - 1) {
                        curIdx = 1;
                    } else {
                        curIdx = index;
                    }
                    $ct.animate({left: -imgWidth * index}, 400, function () {
                        isAnimate = false;
                        $ct.css("left", -imgWidth * curIdx);
                    });
                    setBullet();
                }

                function autoPlay() {
                    clock = setInterval(function () {
                        playNext();
                    }, 4000);
                }

                function stopPlay() {
                    clearInterval(clock);
                }

                function playNext() {
                    play((curIdx + 1) % imgCount);
                }

                function playPre() {
                    play((imgCount + curIdx - 1) % imgCount);
                }
            }
        });
    })(window.jQuery);