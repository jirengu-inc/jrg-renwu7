/**
 * Created by lenovo on 2016/11/10.
 */


jQuery(function($) {
    $(document).ready(function () {
        function Tabs($node) {
            //this.$modtabs = $('.mod-tab');
            this.$node = $node;
            this.$tabs = $node.find('.tabs');
            this.$items = this.$tabs.find('li');
            this.$message = $node.find('.message');
            this.bind();
        }

        Tabs.prototype = {
            bind: function () {

                var _this = this;
                console.log(this);
                this.$items.on('click', function (e) {

                    var idx = $(e.currentTarget).index();
                    //var idx = $(this).index();
                    $(this).siblings().removeClass('active');
                    $(this).addClass('active');
                    console.log(idx);
                    _this.$items.parents('.information').find('.panel').find('li').removeClass('active');
                    _this.$items.parents('.information').find('.panel').find('li').eq(idx).addClass('active');
                })
            }
        };
        var tab = $('.information');
        var a = new Tabs(tab);
    });

    $('.help-info').on('click',function () {
        alert('页面问题请联系 QQ：417002107 云服务_郑天宇')
    })
});
