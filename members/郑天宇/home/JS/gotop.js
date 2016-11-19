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

    GoTop.prototype.bindEvent = function () {
        var $this = this;
        console.log($this);
        $(window).on('scroll',function () {
            var sctop = $(window).scrollTop();
            console.log(sctop);

            if(sctop>=200){
                $this.$target.show();
            }else {
                $this.$target.hide();

            }
        });
        this.$target.on('click',function () {
            $(window).scrollTop(0);
        })

    };
    var gotop = new GoTop($('.bb'));
    gotop.createNode();
    gotop.bindEvent();
})
