$(document).ready(function(){
    var proin=$('.projects-introduction');
    proin.on('mouseover',function(){
        if(!proin.is(':animated')) {
            if (!$(this).hasClass('z1')) {
                var mid_div = $('.z1');
                mid_div.stop(true).animate({
                    "left": $(this).position().left,
                    "top": $(this).position().top,
                    "width": $(this).width(),
                    "height": $(this).height()
                }, 300);
                $(this).addClass('z1').stop(true).animate({
                    "left": mid_div.position().left,
                    "top": mid_div.position().top,
                    "width": mid_div.width(),
                    "height": mid_div.height()
                }, 300, function () {
                    $(this).siblings('.projects-introduction').removeClass('z1');
                })
            }
        }
    });
});