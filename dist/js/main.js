$(function(){


  $('.slider__items').slick({	
    arrows: false,
    dots: true,
	  fade: true,
    autoplay: true
  });

  // $('.blog__table-items').slick({	
  //   arrows: true,
  //   prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="img/content/blog/back.svg" alt="images"></button>',
  //   nextArrow: '<button type="button" class="slick-btn slick-next"><img src="img/content/blog/next.svg" alt="images"></button>'
  // });
	

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