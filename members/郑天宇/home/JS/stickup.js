
jQuery(function($) {
    $(document).ready( function() {
        //为 '.navbar-wrapper' class 启用stickUp插件
        $('.nav').stickUp({
            parts: {
                0:'contactus',
                1:'persons',
                2: 'results',
                3: 'homepage',

            },
            itemClass: 'menuItem',
            itemHover: 'active'
        });
    });
});