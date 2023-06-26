$("body").prepend('<div id="loaderOverlay"><div class="custom-loader"><img src="/images/preloader.gif"/> <span>Loading<span class="one">.</span><span class="two">.</span><span class="three">.</span></span></div></div>');
// $('.homeProductListing li.Scholarship').remove();
$(window).on('load', function () {
    // PAGE IS FULLY LOADED
    // FADE OUT YOUR OVERLAYING DIV
	
    $('#loaderOverlay').remove();
    $('.site-nav > ul > li:nth-child(4)').addClass('nav-revert');
	// $('#timer').css('height', '109');
    // $('#timer').css('borderBottom', '2px solid #20404b');
    // $('.slide-block-wrap .slide-block:nth-child(1)').css('height', '179px')	
	// $('.slide-block-wrap .slide-block:nth-child(1)').append('<h4 class="small-label" style="font-size: 14px; font-weight: bold; background: #072762; padding: 5px;">India Energy Week 2023 - Theme Tune</h4><audio controls="" style="width: 90%; margin-top: 5px; height: 30px; margin-left: 10px;"><source src="https://iocl.com/uploads/IEWMogo.mp3" type="audio/mp3"></audio>');
		
    
});


$(".homeProductListing").find("li").hover(
    function () {
        $(".bgfullImg").removeAttr("class").addClass("bgfullImg " + $(this).attr("class") + "BG");
        setTimeout(function () {
            $(".bgfullImg").addClass("fadeIn hover");
        }, 750);
    },
    function () { $(".bgfullImg").removeAttr("class").addClass("bgfullImg MotoristBG"); }
);


$(window).scroll(function () {
    var sticky = $('.site-header'),
        scroll = $(window).scrollTop();
    if (scroll >= 100) { sticky.addClass('fixed'); }
    else { sticky.removeClass('fixed'); }
});


$('.search-click').click(function () {
    $('.search-wrap').addClass('act');
    $('.search-overlay').addClass('act');
    $('body').addClass('navOpen');
});

$('.search-close').click(function () {
    $('.search-wrap').removeClass('act');
    $('.search-overlay').removeClass('act');
    $('body').removeClass('navOpen');
});


$(".site-nav ul li a").each(function () {
    if ($(this).parent().find('ul').length > 0) {
        $(this).parent().prepend('<span class="subDropAlt"></span>');
        $(this).parent().addClass('has-sub');
    } else {
    }
});

$('.subDropAlt').click(function () {
    $(this).parent().find('> ul').slideToggle();
});

$('.mobClick').click(function () {
    $(this).toggleClass('open');
    $('.site-nav').toggleClass('act');
    $('.nav-overlay').toggleClass('act');
    $('body').toggleClass('navOpen');
});

$('.navClose').click(function () {
    $('.nav-container').toggleClass('act');
});


$(".slider").jasCarousel({
    margin: 5,
    auto: true,
    speed: 800,
    delay: 5000,
    slideFrontFace: false,
    perspective: 800,    
    moveOnSlideClick: true,
});

$('#video-gallery').lightGallery();
$('#video-gallery2').lightGallery();


/*(function($){
  $(window).on("load",function(){
    $("#content-1").mCustomScrollbar({
      //theme:"minimal"
    });
  });
})*/(jQuery);


$(document).ready(function () {
    $('.custom-select').select2({
        minimumResultsForSearch: -1
    });
});