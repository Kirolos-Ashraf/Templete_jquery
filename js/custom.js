/* global $, alert, console */

$(function () {

    'use strict';

    //adjust header height


    var myheader = $('.header');

    myheader.height($(window).height());

    $(window).resize(function () {

        myheader.height($(window).height());

        $('.bxslider').each(function () {

            $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2);

        });

    });

    //links add active class when i click in link

    $('.links li a').click(function () {

        $(this).parent().addClass('active').siblings().removeClass('active');

    });

    // box slider 

    // adjust create height 



    $('.bxslider').bxSlider({

        pager: false,
        speed: 1000
    });

    $('.bxslider').each(function () {

        $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2);

    });

    // maouse smoth scrolling

    $(' .links li a ').click(function () {

        $('html , body').animate({

            scrollTop: $('#' + $(this).data('value')).offset().top

        }, 1700);


    });


    // auto slider for testimonial 

    $(function autoSlider(){
        
        $('.slider .active').each(function() {
            
            if(!$(this).is(':last-child')){
                
                $(this).delay(3000).fadeOut(1000, function(){
                    
                    $(this).removeClass('active').next().addClass('active').fadeIn(1000);
                    
                    autoSlider();
                    
                })
                
            } else {
                
                $(this).delay(3000).fadeOut(1000, function(){
                    
                    $(this).removeClass('active');
                    
                    $('.slider div').eq(0).addClass('active').fadeIn(1000);
                    
                    autoSlider();
                    
                })
            }
            
        })
    })
    
    // shuffle mixitup plugin
    mixitup('#container');    

    $('.shuffle li').click(function(){
        
        $(this).addClass('selected').siblings().removeClass('selected');
        
    })
    
    // tigger nice scroll
    $('html, body').niceScroll({
        cursorcolor: '#28A48B',
        cursorwidth: '8px'
    });
    
});
