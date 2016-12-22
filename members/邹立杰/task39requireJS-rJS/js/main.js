requirejs.config({
	baseUrl:"./js",
	paths:{
		"jquery" : "lib/jquery/jquery.min"
	}
});

require(['jquery','app/carousel'],function($,Carousel){
	Carousel.init($(".carousel"));
});
require(["jquery",'app/gotop'],function($,goTop){
	goTop.init();
})
require(["jquery",'app/getdata'],function(){
	// console.log("click前")
	$("#load").click();
	// console.log("click后")
})
require(["jquery",'app/exposure'],function($,Exposure){
	Exposure.init( $(".about-itemlist li") );
})