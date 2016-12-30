define(['jquery'],function($){
	var clock;
    var $target = $('#load');
    var curPage = 1,
        lenPageCount = 10;

    var colSumHeight = [];

    $('.load-more').on('click',function(){
        // 滚动会产生多次事件响应, setTimeout 主要在最后一次响应时候执行 checkShow
        if(clock){
            clearTimeout(clock);
        }

        clock = setTimeout(function(){
            // checkShow();
            doSome();
        },200);

    });

    checkShow();

    function checkShow(){
        if(isShow($target)){
            doSome();
        }
    }

    function isShow($el){
        var scrollH = $(window).scrollTop(),
            winH = $(window).height(),
            vTop = $el.offset().top;
        if(vTop < scrollH + winH){
            return true;
        }else{
            return false;
        }
    }

    function doSome(){ //1,获取数据,2,拼装DOM
        $.ajax({
            url: 'http://platform.sina.com.cn/slide/album_tech',
            type: 'get',
            dataType: 'jsonp',
            jsonp: "jsoncallback",
            data : {
                app_key: '1271687855',
//                format: 'json',
//                size: 'img',
                num: lenPageCount,
                page: curPage
            },
            success: function(ret){
                if(ret.status.code == 0){
                    var dataArr = ret.data;
                    var $nodes = renderData(dataArr);
                    renderWaterFull($nodes);
                    curPage++;
                }
            }
        })
    }


    function renderData(items){
//        console.log(items)
        var tpl = '',
            $nodes;
        for(var i = 0;i<items.length;i++){
            tpl += '<li class="item" style="display: none;">';
            tpl += ' <a href="'+ items[i].url +'" class="link"><img src="' + items[i].img_url + '" alt=""></a>';
            tpl += ' <h4 class="header">'+ items[i].short_name +'</h4>';
            tpl += '<p class="list-p">'+items[i].short_intro+'</p>';
            tpl += '</li>';
        }
        $nodes = $(tpl);

        $('#pic-ct').append($nodes);
        return $nodes;
    }



//  瀑布流
    function renderWaterFull($nodes){

        var nodeWidth = $nodes.outerWidth(true),
            cloNum = parseInt($('#pic-ct').width()/nodeWidth);

        if(colSumHeight.length == 0 ){
            for (i=0;i<cloNum;i++){
                colSumHeight.push(0);
            }
        }


        $nodes.each(function(){

            var $cur = $(this);

//            console.log($cur);
            // colSumHeight = [100,150,170,80]
            $(this).find('img').on('load',function(){ //图片加载完了在计算高度
                var idx = 0 ,
                    minSumHeight = colSumHeight[0];

                for(var i = 0; i < colSumHeight.length;i++ ){
                    if(colSumHeight[i]< minSumHeight ){
                        idx = i;
                        minSumHeight =  colSumHeight[i];
                    }
                }

                $cur.css({
                    left: nodeWidth*idx,
                    top: minSumHeight,
                    display: 'block'
                });
                colSumHeight[idx] = colSumHeight[idx] + $cur.outerHeight(true) ;
                $('#pic-ct').height(Math.max.apply(null,colSumHeight));// 这是一个坑, 只有设置UL 的高度,才能让 load 紧跟在UL 之后
            })


        })
    }


});











