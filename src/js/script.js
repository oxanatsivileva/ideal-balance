document.addEventListener('DOMContentLoaded', () => {
    var jobSlider = $('.job__slider');
    jobSlider.on('init', function(event, slick, currentSlide) {
      var
        cur = $(slick.$slides[slick.currentSlide]),
        next = cur.next(),
        prev = cur.prev();
      prev.addClass('slick-sprev');
      next.addClass('slick-snext');  
      cur.removeClass('slick-snext').removeClass('slick-sprev');
      slick.$prev = prev;
      slick.$next = next;
    }).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
      var cur = $(slick.$slides[nextSlide]);
      console.log(slick.$prev, slick.$next);
      slick.$prev.removeClass('slick-sprev');
      slick.$next.removeClass('slick-snext');
      next = cur.next(),  
      prev = cur.prev();
      prev.addClass('slick-sprev');
      next.addClass('slick-snext');
      slick.$prev = prev;
      slick.$next = next;
      cur.removeClass('slick-next').removeClass('slick-sprev');
    });
    
    jobSlider.slick({
      speed: 2000,
      arrows: true,
      dots: false,
      focusOnSelect: true,
      prevArrow: '<button type="button" class="slick-prev"><img src="icons/Arrow-left.png"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="icons/Arrow-right.png"></button>',
      infinite: true,
      centerMode: true,
      slidesPerRow: 1,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerPadding: '0',
      swipe: true,
      autoplay: true,
      autoplaySpeed: 0,
      cssEase: 'linear',
    
      customPaging: function(slider, i) {
        return '';
      },
      responsive: [
        {
          breakpoint: 769,
          settings: {
            autoplay: false,
            
          }
        },
          {breakpoint: 576,
          settings: {
            arrows: false,
            
          }

        },
      ]
      /*infinite: false,*/
    })

    const menu = document.querySelector('.header'),
    menuItem = document.querySelectorAll('.header__item'),
    hamburger = document.querySelector('.hamburger__wrapper');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger__wrapper_active');
        menu.classList.toggle('header_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger__wrapper_active');
            menu.classList.toggle('header_active');
        });
    });


    $('.team__slider-wrapper').slick({
      infinite: true,
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev"><img src="icons/Arrow-left.png"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="icons/Arrow-right.png"></button>',
      dots: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
      cssEase: 'linear',
      // autoplay: true,
      responsive: [
        {
          breakpoint: 769,
          settings: {
            centerMode: true,
            arrows: false,
          }
        },
      ]

    });
    
    $('.job__slider-mobile').slick({
      infinite: true,
      arrows: false,
      dots: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipe: true,
      centerMode: true,
      variableWidth: true,
    });


    $('[data-modal=callback]').on('click', function() {
      $('.overlay, #callback').fadeIn('slow');
    });

    $('[data-modal=application]').on('click', function() {
      $('.overlay, #application').fadeIn('slow');
    });

  
    $('.modal__close').on('click', function() {
      $('.overlay, #callback, #application').fadeOut('slow');
    });



  function validateForms(form){
    $(form).validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            phone: "required",
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: {
                required: "Пожалуйста, введите свое имя",
                minlength: jQuery.validator.format("Введите {0} символа!")
              },
            phone: "Пожалуйста, введите свой номер телефона",
            email: {
              required: "Пожалуйста, введите свою почту",
              email: "Неправильно введен адрес почты"
            }
        }
    });
};

validateForms('#callback form');
validateForms('#application form');
validateForms('#service-form');

  $('input[name=phone]').mask("+7 (999) 999-9999");
	

        
    
;});
