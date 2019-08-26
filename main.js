$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        var target = $(this.hash);
        if (target.length) {
            $("html, body").animate({
                    scrollTop: target.offset().top
                },
                600
            );
        }
    });
});

// $('nav_bar_buttons').on('click', function() {
//     console.log("Pressed");

//     $('nav_bar').find('li.active').removeClass('active');
//     $(this).parent('li').addClass('active');
// });

// $('#nav_bar_buttons').on('click', function() {

//     console.log("Pressed");

//     $('#topheader .navbar-nav').find('li.active').removeClass('active');
//     $(this).parent('li').addClass('active');
// });

$(document).ready(function() {
    $('li').on('click', function() {
        console.log("Hello");

        $('li').removeClass('active');
        $(this).addClass('active');

    });
});