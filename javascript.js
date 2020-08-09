$(document).ready(function () {

    //navigation bar//
    $('.menu-toggler').on('click', function () {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

    $('.top-nav .nav-link').on('click', function() {
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });

    //for smooth scrolling
    $('nav a[href*="#"]').on('click',function(){
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 5
        }, 2000);
    })

    $('.landing-text a[href*="#"]').on('click',function(){
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 5
        }, 2000);
    })

    $('#up').on('click',function(){
        $('html, body').animate({
            scrollTop: 0
        }, 2000);
    })


});