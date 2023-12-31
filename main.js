(function($) {
    "use strict"

    //navbar on scrolling

    $(Window).scroll(function (){
        if($(this).scrollTop() > 200){
            $('.navbar').fadeIn('slow').css('display', 'flex');
        }else{
            $('.navbar').fadeOut('slow').css('display', 'none'); 
        }
    })

    //Typed Initiate
    if ($('.typed-text-output').length == 1){
       var typed_strings = $('.typed-text').text();
       var typed = new Typed('.typed-text-ouput', {
        strings:typed_strings.split(', '),
        typedSpeed:100,
        backSpeed: 20,
        smartBackspace:false,
        loop: true
       })
    }
});


// portfolio isotope and filter
var portfolioIsotope = $('.portfolio-container'); ({
    itemSelector: '.portfolio-item',
    layoutMode: 'fitRows'
});
$('#portfolio-flters li').on('click', function () {
    $("#portfolio-flters li").RemoveClass('active');
    $(this).addClass('active');

    portfolioIsotope.isotope({filter: $(this).data('filter')});
});