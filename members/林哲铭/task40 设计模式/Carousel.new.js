function Carousel($node) {
    this.$carousel = $node;
    var $ct = this.$ct = this.$carousel.find(".image-ct");
    this.$item = $ct.children();
    this.$next = this.$carousel.find(".next");
    this.$pre = this.$carousel.find(".pre");
    this.$bullet = this.$carousel.find(".bullet");
    this.imgWidth = $ct.find("img").width();
    this.imgCount = $ct.find("img").length + 2;
    this.isAnimate = false;
    this.clock = "";
    this.init();
    this.curIdx = 1;
}
Carousel.prototype = {
    init:function(){
        var that = this;
        this.$next.on("click",function () {
            that.playNext();
        });
        this.$pre.on("click",function () {
            that.playPre();
        });
        this.$bullet.on("click","li",function () {
            var idx = $(this).index();
            that.play(idx+1);
        });

        this.prepare();
        this.play(this.curIdx);
        this.autoPlay();
    },
    prepare:function(){
        var $ct = this.$ct;
        var $items = this.$item;
        $ct.prepend($items.last().clone());
        $ct.append($items.first().clone());
        $ct.width(this.imgWidth*this.imgCount);
        $ct.css("left",-this.imgWidth);
    },
    setBullet:function() {
        this.$bullet.children().removeClass("active")
            .eq(this.curIdx-1).addClass("active")
    },
    playNext:function(){
        this.play((this.curIdx + 1) % this.imgCount);
    },
    playPre:function () {
        this.play((this.imgCount+ this.curIdx - 1) % this.imgCount);
    },
    autoPlay:function(){
        var that = this;
        this.clock = setInterval(function () {
            that.playNext();
        },3000)
    },
    play:function(idx){
        var that =this;
        if(this.isAnimate == true) return;
        this.isAnimate = true;
        if( idx == 0){
            this.curIdx = this.imgCount-2;
        }else if (idx == this.imgCount-1){
            this.curIdx = 1;
        }else{
            this.curIdx = idx;
        }
        this.$ct.animate({left:-that.imgWidth*idx},400,function () {
            that.isAnimate = false;
            that.$ct.css("left",-that.imgWidth*that.curIdx);
        });
        this.setBullet();
    },
    stopPlay:function(){
        clearInterval(this.clock);
    }
};