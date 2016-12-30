
require.config({
	baseUrl: './task39/js',
	paths: {
		'jquery': 'lib/jquery.min'
	}
});
require(['jquery','app/fullScreenCarousel','app/goTop','app/waterFull','app/exposure'], function($,Carousel,GoTop,waterFull,Exposure){
		GoTop.init();
		$('.load-more').click();
		Exposure.init($('#about .exposure'));
});
// ,'app/ajax','app/Exposure