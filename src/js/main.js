jQuery(function() {
    jQuery('#ham').on('click', function(){
        jQuery('.mobile-menu').toggleClass('open');
        jQuery('.header').toggleClass('open');
    });
});