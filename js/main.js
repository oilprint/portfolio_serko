$(function(){

  $(".header__link , .header__down, .logo").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
				$('body,html').animate({scrollTop: top}, 1500);
	});

$('.header__burger, .header__link').on('click', function(){
  $('.header__list').toggleClass('header__list--active');
  $('.header__burger').toggleClass('header__burger--active');
  
});

var mixer = mixitup('.portfolio__content');

$(window).scroll(function() {
	if($(document).scrollTop() < 1){
		$('.header__menu').removeClass('fixed');
		$('.header__menu').removeClass('active');		
	}else if($(document).scrollTop() > 100 ){
		$('.header__menu').removeClass('fixed');
		$('.header__menu').addClass('active');
	}else{
		$('.header__menu').addClass('fixed');
	}
});

});