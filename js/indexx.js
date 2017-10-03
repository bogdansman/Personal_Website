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


// Vegas slider
$(function () {
    $(".vegas").vegas({
        delay: 7000,
        timer: false,
        shuffle: true,
        firstTransition: 'fade',
        firstTransitionDuration: 5000,
        slides: [
            { src: "images/Vegas_Slider_Images/Iphone_Castle.jpg" },
            { src: "images/Vegas_Slider_Images/Iphone_VISA.jpg" },
            { src: "images/Vegas_Slider_Images/Man_at_Office.jpg" },
            { src: "images/Vegas_Slider_Images/Meeting_Coffe.jpg" }
        ]
    });
});
