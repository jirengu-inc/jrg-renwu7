define(['jquery'],function($){

    function init(){
        var $goTop = $('#go-top');
        $(window).on('scroll',function(){
            if(isShow()){
                return true;
            }
        });

        $goTop.on('click',function(){
            $('body').scrollTop('0');
        });

        function isShow(){
            var v_top = $('body').scrollTop();
            if(v_top > 600){
                $goTop.css({'display' : 'block'});
            } else {
                $goTop.hide();
            }
        }
    }

    return {
        init: init
    }
});


