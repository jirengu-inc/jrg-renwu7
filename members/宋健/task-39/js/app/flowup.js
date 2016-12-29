define(['jquery'],function($){
    function FlowUp($ele){
        this.$ele = $ele;
        this.bind();
    }
    FlowUp.prototype = {
        bind:function(){
            var _this = this;
            $(window).on('scroll',function(){
                _this.$ele.each(function(){
                    if(_this.isShow($(this))){
                        $(this).css({'animation': 'moveUp 0.5s ease forwards', '-webkit-animation': 'moveUp 0.5s ease forwards'});
                    }
                });
            })
        },
        isShow:function($el){
            var winH = $(window).height(),
                scrollT = $(window).scrollTop(),
                offsetT = $el.offset().top;
            if((offsetT>scrollT)&&(offsetT<winH+scrollT)){
                return true;
            }
            else{
                return false;
            }
        }
    };
    return FlowUp;
});
