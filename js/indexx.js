// realizam o variabila cu latimea ferestrei
// daca este mai mare de 768 se adauga clasa nav-collapsed doar la scroll
// daca este mai mica de 768px, se adauga clasa nav-collapsed automat
var width = $(window).width();
if(width > 768){

// adauga background-ul negru cand dam scrol mai mult de 50 px
jQuery(window).scroll(function() {
    if (jQuery(".navbar").offset().top > 150) {
        jQuery(".navbar-fixed-top").addClass("nav-collapsed");
        } 
    else{
        jQuery(".navbar-fixed-top").removeClass("nav-collapsed");
        }
});
}else{
   jQuery(".navbar-fixed-top").addClass("nav-collapsed");
}



// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function() {
    $('.navbar-toggle:visible').click();
});


// scroll animat
jQuery('.page-scroll').bind('click', function(e) {
            e.preventDefault();
            jQuery('html,body').animate({scrollTop: jQuery(this.hash).offset().top - 100});               
});


// get browser Firefox


// Vegas slider
$(function () {
    $(".vegas").vegas({
        delay: 5000,
        timer: true,
        shuffle: true,
        firstTransition: 'fade',
        firstTransitionDuration: 5000,
        transition: 'blur',
        transitionDuration: 2000,
        slides: [
            { src: "images/Vegas_Slider_Images/Iphone_Castle.jpg" },
            { src: "images/Vegas_Slider_Images/Iphone_VISA.jpg" },
            { src: "images/Vegas_Slider_Images/Man_at_Office.jpg" },
            { src: "images/Vegas_Slider_Images/Meeting_Coffe.jpg" },
            { src: "images/Vegas_Slider_Images/Html_code.jpeg" },
            { src: "images/Vegas_Slider_Images/Laptop_phone.jpeg" },
            { src: "images/Vegas_Slider_Images/Imac_Ipad.jpeg" },
            { src: "images/Vegas_Slider_Images/Web_Design.jpeg" },
            { src: "images/Vegas_Slider_Images/Work_Group.jpg" }
        ]
    });
});

// Animate CSS
$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
        return this;
    }
});

// animate title
$('.animatedTitle').animateCss('pulse');

//animte focus left
$('.animatedFocusLeft').animateCss('bounceInLeft');

// animte focus left p
$('.animatedFocusLeftP').animateCss('bounceInRight');

// animate focus right
$('.animatedFocusRight').animateCss('bounceInRight');

// animate focus right p
$('.animatedFocusRightP').animateCss('bounceInLeft');

// animate Focus area
$('.animatedFocus').animateCss('lightSpeedIn');

// animate focus description
$('.animatedFocusDesc').animateCss('lightSpeedIn');

// animate book
$('.animatedBook').animateCss('bounceInLeft');

// animate service info
$('.animatedServiceInfo').animateCss('bounceInRight');

// animate service info p
$('.animatedServiceInfoP').animateCss('bounceInUp');

// animate bike
$('.animatedBike').animateCss('bounceInDown');

// animate web development
$('.animatedWebDev').animateCss('bounceInUp');

// animate web dev p
$('.animatedWebDevP').animateCss('bounceInUp');

// aniamte lifebuoy
$('.animatedLifeBuoy').animateCss('bounceInRight');

// animate seo
$('.animatedSeo').animateCss('bounceInLeft');

// animate seo p
$('.animatedSeoP').animateCss('bounceInUp');



// animate UI/UX
$('.animatedUiUx').animateCss('.bounceInRight');


// Wow.js for Animated css
new WOW().init();
