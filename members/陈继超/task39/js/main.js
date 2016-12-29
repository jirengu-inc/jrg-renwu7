
require.config({
	baseUrl: 'js',
	paths: {
		'jquery': 'lib/jquery.min'
	}
});
require(['jquery','app/fullScreenCarousel','app/goTop','app/waterFull'], function($,Carousel,GoTop){
		GoTop.init();
		Carousel.init($('#ct'));
		$('.load-more').click();
});

// ,'app/ajax','app/exposure