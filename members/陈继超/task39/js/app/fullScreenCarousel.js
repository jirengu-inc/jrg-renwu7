define(['jquery'], function($){

var Carousel = (function(){
     var $ct1 = $('#ct .ct1'),
        $items = $ct1.children(),
        $bf = $('.before'),
        $af = $('.after'),
        $ct2 = $('#ct .ct2'),
        imgWidth = $(window).width(),
        imgNum = $items.length; // 克隆的不算数量

    $ct1.prepend($items.last().clone());
    $ct1.append($items.first().clone());
    imgRealNum = $ct1.children().length;
    $('.ct1 li').css('width',imgWidth);
    $('.bg').css('width',imgWidth);
    $ct1.css({
        left: 0-imgWidth,
        width: imgRealNum*imgWidth
    });

    $bf.on('click',function(){
        playBefore();
    });
    $af.on('click',function(){
        playAfter();
    });
    $ct2.find('li').on('click',function(){
        var idx = $(this).index();
        if(idx > curIdx){
            playAfter(idx - curIdx);
        }else if (idx < curIdx){
            playBefore(curIdx - idx);
        }
    });

    var curIdx = 0,
        isAnimate = false ;

    setBg(1);
    playauto();
    //    playautoStop();

// 图片实现懒加载
    function setBg(idx){
        var idx = idx || 0,
            $node = $items.eq(idx),
            $bg = $node.find('.bg'),
            imgUrl = $bg.attr('data-bg-img');
        if($node.data('isBgset')) return;
            $bg.css( {
                'background-image': 'url(' + imgUrl + ')'
            } );
            $node.data('isBgset', true);
    }

    function setct2(){
        var idx = curIdx;
        $ct2.find('li').removeClass('active')
            .eq(idx).addClass('active');
    }



    function playAfter(idx){
        var idx = idx || 1;
        if(!isAnimate){
            isAnimate = true;
            setBg(curIdx + 2);
            $ct1.animate( {left: '-='+ (imgWidth*idx) }, function(){
                curIdx = (curIdx+idx)%imgNum;
                if(curIdx === 0){
                    $ct1.css({left: 0-imgWidth});
                }
                isAnimate = false;
                setct2();
            })
        }
    }

    function playBefore(idx){
        var idx = idx || 1;
        if(!isAnimate){
            isAnimate = true;
            setBg(curIdx - 1);
            $ct1.animate({left: '+='+(imgWidth*idx)}, function(){
                curIdx = (imgNum + curIdx - idx)%imgNum;
                if(curIdx === (imgNum-1)){
                    $ct1.css({left: 0-imgWidth*imgNum});
                }
                isAnimate = false;
                setct2();
            })
        }
    }

    function playauto(){
        clock = setInterval(function(){
            playAfter();
        },3000)
    }

    function playautoStop(){
        clearInterval(clock);
    }
})()
       return {Carousel}
});
