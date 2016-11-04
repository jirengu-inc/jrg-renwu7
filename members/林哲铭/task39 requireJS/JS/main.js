require.config({
    baseUrl: "JS",
    paths:{
        "jquery" :"lib/jquery.min"
    }
});
require(['jquery','app/ajax','app/exposure','app/fullScreenCarousel','app/goTop','app/stickup'],function($,AJAX,Exposure,Carousel,GoTop,Stickup){
	GoTop.init();
	Exposure.init($(".exposure"));
	Carousel.init($("#header"));
	Stickup.init($(".nav-bar"));
	AJAX.init($("#protfolio"));
});