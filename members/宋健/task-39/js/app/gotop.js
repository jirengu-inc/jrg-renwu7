define(['jquery'],function($){
    function GoTop($ele){
        this.$ele = $ele;
        this.bind();
    }
    GoTop.prototype = {
        bind:function(){
            var me = this;
            $(window).on('scroll',function(){
                var scrollT = $(window).scrollTop();
                if(scrollT>30){
                    me.$ele.show();
                }
                else{
                    me.$ele.hide();
                }
            });
            this.$ele.on('click',function(){
                $(window).scrollTop(0);
            });
        }
    };
    return GoTop;
});


