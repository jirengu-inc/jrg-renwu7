define(['jquery'],function(){
    function Navbar($ele){
        this.$ele = $ele;
        this.bind();
    }
    Navbar.prototype = {
        bind:function() {
            var _this = this;
            this.showList = false;
            this.$ele.parents().find('.navbar-toggle').on('click', function () {
                if (!_this.showList) {
                    _this.$ele.show();
                    _this.showList = true;
                }
                else {
                    _this.$ele.hide();
                    _this.showList = false;
                }
            });
            this.sChange();
            this.rChange();
        },
        CalH:function(){
            var secnum = $('#content').children().length;
            var offsetArr = [];
            for(var i=0;i<secnum;i++){
                var isShow = $('#content').children().eq(i).offset().top;
                offsetArr.push(isShow);
            }
            return offsetArr;
        },
        sChange:function(){
            var _this = this;
            $(window).on('scroll', function () {
                var scrollT = $(window).scrollTop();
                var winW = $(window).width();
                var winH = $(window).height();
                var benchmark = winH / 2;
                if (winW > 767) {
                    _this.$ele.show();
                    if (scrollT >= benchmark) {
                        _this.$ele.parents().find('.header-nav').addClass('bg');
                        function navHighlight(arr){
                            for(var key in arr){
                                if(arr[key]<=scrollT){
                                    _this.$ele.find('li').removeClass('active');
                                    _this.$ele.find('li').eq(key).addClass('active');
                                }
                            }
                        }
                        navHighlight(_this.CalH());
                    }
                    if (scrollT < benchmark) {
                        _this.$ele.parents().find('.header-nav').removeClass('bg');
                    }
                    if (scrollT < winH) {
                        _this.$ele.find('li').removeClass('active');
                    }
                }
                if (winW <= 767) {
                    _this.$ele.hide();
                    _this.$ele.parents().find('.header-nav').addClass('bg');
                }
            });

        },
        rChange:function(){
            var _this = this;
            $(window).on('resize',function(){
                var scrollT = $(window).scrollTop();
                var winW = $(window).width();
                var winH = $(window).height();
                var benchmark = winH/2;
                if(winW>767){
                    _this.$ele.show();
                    if(scrollT>=benchmark){
                        _this.$ele.parents().find('.header-nav').addClass('bg');
                    }
                    if(scrollT<benchmark){
                        _this.$ele.parents().find('.header-nav').removeClass('bg');
                    }
                }
                if(winW<=767){
                    _this.$ele.hide();
                    _this.$ele.parents().find('.header-nav').addClass('bg');
                }
            });
        }
    };
    return Navbar;
});








