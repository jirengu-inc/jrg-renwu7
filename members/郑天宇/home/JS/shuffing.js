$(function() {
    var slidey = $('.banner').unslider({
        speed: 900,
        delay: 3000,
        complete: function() {},
        keys: true,
        dots: true,
        fluid: false
    });
    data = slidey.data('unslider');
    data.move(0, function() {});
    var unslider = $('.banner').unslider();
    $('.unslider-arrow').click(function() {
        var fn = this.className.split(' ')[1];
        unslider.data('unslider')[fn]();
    });
    data.start();
});

