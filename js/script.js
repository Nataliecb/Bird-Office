$(document).ready(function(){
  $('.slider').slick({
    infinite: true,
		autoplay:true,
		autoplaySpeed:2000,
		adaptiveHeight:true,
	  fade: true,
	  cssEase: 'linear'
  });
	$('a[data-rel^=lightcase]').lightcase({
		transition: 'scrollHorizontal',
		liveResize: true,
		swipe: true
	});
	$('.place__img').css({'height': $('.place__img').width()*0.5844 + 'px'});
  if (window.matchMedia('(max-width: 800px)').matches) {
    $('.footer__heading-wrap').on('click', function() {
      if ($(this).children().hasClass('footer__heading_active')) {
        $(this).children().removeClass('footer__heading_active');
        $(this).siblings('.footer__list').slideUp();
      } else {
        $('.footer__heading').removeClass('footer__heading_active');
        $('.footer__list').slideUp();
        $(this).children().addClass('footer__heading_active');
        $(this).siblings('.footer__list').slideDown();
      }
    });
  }
});
$(window).on('load resize', function(){
  $('.place__img').css({'height': $('.place__img').width()*0.5844 + 'px'});
});
