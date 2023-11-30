$(document).ready(function()
{

    // time loop
    $('.counters').counterUp({
        delay: 20,
        time: 20000
    });
    $('.countert').counterUp({
        delay: 20,
        time: 10000
    });
    $('.counterb').counterUp({
        delay: 20,
        time: 5000
    });


    // fed
    var mixer = mixitup('#hello', {
        animation: {
            duration: 300
        }
    });


    lightbox.option({
        'resizeDuration': 800,
        'wrapAround': true
    });





    // AOS
    AOS.init({
        duration: 1000,
        offset: 120,
        easing: 'linear',
        slide: 'slide-up',
    });





    

});


