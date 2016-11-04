/**
 * Created by zm on 2016/11/1.
 */
// ajax

define(['jquery','app/waterFall'],function ($,WaterFall) {
    function AJAX($node){
        this.getData();
        this.click($node);
        this.list = $node.find(".projects-wrap");
    }
    AJAX.prototype = {
        getData:function () {
            var that = this;
            $.ajax({
                url:"getData.php",
                dataType:"json",
                method:'get',
                data:{
                    status:1
                }
            }).done(function(ret){
                that.bind(ret);
            }).fail(function () {
                console.log("请求失败");
            })
        },
        click:function($node){
            var that = this;
            $node.find(".btn").on("click",function(){
                that.getData();
            });
        },
        bind:function (ret) {
            var $node = this.render(ret);
            var deferreds = [];
            $node.find("img").each(function () {
                var def = $.Deferred();
                $(this).on("load",function () {
                    def.resolve();
                });
                deferreds.push(def);
            });
            $.when.apply(null,deferreds).done(function(){
                WaterFall.init($("#protfolio"));
            })
        },
        render:function (ret) {
            var item = "";
            for(var i = 0; i < ret.length;i++){
                item += '<li class="image-block">' +
                    '<a href ="#">' +
                    '<img src="' + ret[i].url + '" />' +
                    '<div class="protfolio-img-hover">' +
                    '<i class="icon iconfont">&#xe60e;</i>' +
                    '</div>'+
                    '</a>' +
                    '<h4>'+ ret[i].title + '</h4>' +
                    '<p>' + ret[i].content + '</p>' +
                    '</li>'
            }
            var $node = $(item);
            this.list.append($node);
            return $node;
        }
    };
    return {
		init:function ($node) {
			new AJAX($node);
		}
	}
});

