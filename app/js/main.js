$(function(){


  $('.slider__items').slick({	
    arrows: false,
    dots: true,
	  fade: true,
    autoplay: true
  });
	
	
	
  var mixer = mixitup('.furniture__items',{
    load: {
        filter: '.category-b'
    }
    });



});