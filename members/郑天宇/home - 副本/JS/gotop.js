/**
 * Created by lenovo on 2016/11/14.
 */

jQuery(document).ready(function($) {
    function GoTop($ct) {
        this.$ct = $ct;
        this.$target = $('<a id="gotop"></a>');

    }
    GoTop.prototype.createNode = function () {

        this.$ct.append(this.$target);
        console.log(this.$ct);
        this.$target.hide();
    };
    var isScroll = false;

    GoTop.prototype.bindEvent = function () {
        var $this = this;
        if (!isScroll) {
            isScroll = true ;
            $(window).on('scroll',function () {
                console.log(1);
                var sctop = $(window).scrollTop();
                if(sctop>=200){
                    $this.$target.show();
                    isScroll = false;
                }else {
                    $this.$target.hide();
                    isScroll = false;

                }

            });
        }
        this.$target.on('click',function () {
            $(window).scrollTop(0);
        })

    };
    var gotop = new GoTop($('.bb'));
    gotop.createNode();
    gotop.bindEvent();
})
