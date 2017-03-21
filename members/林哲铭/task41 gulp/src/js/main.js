require.config({
    baseUrl: "js",
    paths:{
        "jquery" :"./lib/jquery.min"
    }
});
require(['jquery','app/ajax','app/exposure','app/fullScreenCarousel','app/goTop'],function($,AJAX,Exposure,Carousel,GoTop){
	GoTop.init();
	Exposure.init($(".exposure"));
	Carousel.init($("#header"));
	AJAX.init($("#protfolio"));
});