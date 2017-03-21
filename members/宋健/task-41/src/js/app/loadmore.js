define(['jquery'],function($){
    function LoadMore($ele){
        this.$ele = $ele;
        this.isLoading = false;
        this.bind();
    }
    LoadMore.prototype = {
        bind:function(){
            var _this = this;
            this.$ele.on('click',function(){
                if(_this.clock){
                    clearTimeout(_this.clock);
                }
                _this.clock = setTimeout(function(){
                        _this.getData();
                },300)
            });
        },
        getData:function(){
            var _this = this;
            if(!this.isLoading){
                this.isLoading = true;
                $.ajax({
                    url:'http://www.joycesong.com/test/task39/1.php?jsonp=callbackFunction',
                    dataType:'jsonp',
                    jsonp:"jsoncallback"
                }).done(function($json_data){
                    _this.formatData($json_data);
                    _this.isLoading = false;
                }).fail(function(){
                    console.log('Get data failure');
                });
            }
        },
        formatData:function(arr){
            var $nodes,
                str = '';
            for(var i=0;i<arr.length;i++){
                str += '<li>';
                str += '<a href="#"><div class="a-hover"><i class="fa fa-plus"></i></div><img src="'+arr[i].img_url+'"></a>';
                str += '<div class="portfolio-content">';
                str += '<h3>'+arr[i].short_name+'</h3>';
                str += '<p>'+arr[i].short_intro+'</p>';
                str += '</div>';
                str += '</li>';
            }
            $nodes = $(str);
            this.$ele.parent().find('.portfolio-list').append($nodes);
            return $nodes;
        }
    };
    return LoadMore;
});