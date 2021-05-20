$(function(){


  $('.slider__items').slick({	
    arrows: false,
    dots: true,
	  fade: true,
    autoplay: true
  });
	

  $('.header__btn').on('click', function(){
    $('.right-btn').removeClass('right-btn--close');
  });
  $('.right-btn__close').on('click', function(){
    $('.right-btn').addClass('right-btn--close');
  });


  var mixer = mixitup('.furniture__items',{
    load: {
        filter: '.category-b'
    }
    });



});