//* Some Project
  const swiper1 = new Swiper('.mySwiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 2.5,
    spaceBetween: 30,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    breakpoints: {
      320: {
          slidesPerView: 1.5,
          spaceBetween: 30,
          slideToClickedSlide: true,
      },
      769: {
        slidesPerView: 2.5,
      }
    }
  });
  //* Some Project end

  //* Testimonials
  const swiper3 = new Swiper('.swiper1', {
    // Optional parameters
    direction: 'horizontal',
    // loop: true,
    slidesPerView: 3,
    spaceBetween: 20,
    slidesPerGroup: 3,
    loopFillGroupWithBlank: true,
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
          slidesPerView: 1.5,
          spaceBetween: 30,
          slideToClickedSlide: true,
      },
      769: {
        slidesPerView: 2.3,
      },
      1025: {
        slidesPerView: 3,
      }
    }
  
  });
  //* Testimonials end


  const burgerOpen = document.querySelector('.burger-open');
  const burgerClose = document.querySelector('.burger-close');
  const burger = document.querySelector('.burger');


  burgerOpen.addEventListener("click", function(){
    burgerOpen.classList.add('active');
    burgerClose.classList.add('active');
  })
  burgerClose.addEventListener("click", function(){
    burgerOpen.classList.remove('active');
    burgerClose.classList.remove('active');
  })
