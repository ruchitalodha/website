$(document).ready(function () {
    $('#menu-toggle').click(function () {
        $(this).toggleClass('active');
        $('.logo').toggleClass('logo-menu-open');
        $('.menu-overlay').toggleClass('open');
    });

    $('.main-nav li a').click(function () {
        $('#menu-toggle').removeClass('active');
        $('.logo').removeClass('logo-menu-open');
        $('.menu-overlay').removeClass('open');
        $("body, html").animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 600);
    });

    $('a[href="#top"]').click(function () {
        $('#menu-toggle').removeClass('active');
        $('.logo').removeClass('logo-menu-open');
        $('.menu-overlay').removeClass('open');
    });

});
