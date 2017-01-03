requirejs.config({
    baseUrl: 'js',
    paths: {
        jquery:'lib/jquery'
    }
});

requirejs(['jquery','app/carousel','app/navbar','app/gotop','app/flowup','app/loadmore'], function($,Carousel,Navbar,GoTop,FlowUp,LoadMore){
    new Carousel($('.carousel'));
    new Navbar($('.navlist'));
    new GoTop($('#gotop'));
    new FlowUp($('.timelinelist li'));
    new LoadMore($('.loadbtn'));
});
