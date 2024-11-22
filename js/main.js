jQuery(document).ready(function($) {

    $('.level-bar-inner').css('width', '0');

    $(window).on('load', function() {

        $('.level-bar-inner').each(function() {

            var itemWidth = $(this).data('level');
            var $this = $(this);
            setTimeout(function(){
                $this.css('width', itemWidth);
            }, 500);

        });

    });

});
