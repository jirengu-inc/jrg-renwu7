
require.config({
	baseUrl: 'js',
	paths: {
		'jquery': 'lib/jquery.min'
	}
});
require(['jquery','app/fullScreenCarousel','app/goTop','app/waterFull','app/exposure'], function($,Carousel,GoTop,waterFull,Exposure){
		GoTop.init();
		$('.load-more').click();
		Exposure.init($('#about .exposure'));//.init($('#about .vertical-line li'))
});

// ,'app/ajax','app/Exposure