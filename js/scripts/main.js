var swiper = new Swiper(".slide-video", {
    slidesPerView: 1,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints:{
        1150: {
          spaceBetween: 8,
        },
        990: {
          slidesPerView: 1,
          spaceBetween:8,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 8,
        },
        560: {
          slidesPerView: 1,
          spaceBetween: 8,
        },
        360: {
          slidesPerView: 1,
          spaceBetween: 8,
        },
        1150: {
          slidesPerView: 1,
          spaceBetween: 8,
        },
      }
  });

  var swiper = new Swiper(".content-box-video", {
    slidesPerView: 2,
    spaceBetween: 32,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next2",
        prevEl: ".swiper-button-prev2",
      },
      breakpoints:{
        1150: {
          slidesPerView: 4,
          spaceBetween: 8,
        },
        990: {
          slidesPerView: 4,
          spaceBetween: 8,
        },
        768: {
          slidesPerView: 2.5,
          spaceBetween: 16,
        },
        560: {
          slidesPerView: 1.5,
          spaceBetween: 8,
        },
        360: {
          slidesPerView: 1.2,
          spaceBetween: 16,
        },
        
        1200: {
          slidesPerView: 2,
          spaceBetween: 8,
        },
      }
  });

  var swiper = new Swiper(".slide-post-rel", {
    slidesPerView: 3,
    spaceBetween: 8,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      breakpoints:{
        1150: {
          slidesPerView: 3,
          spaceBetween: 8,
        },
        990: {
          slidesPerView: 3,
          spaceBetween: 8,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 8,
        },
        560: {
          slidesPerView: 2,
          spaceBetween: 8,
        },
        360: {
          slidesPerView: 1.2,
          spaceBetween: 16,
        },
        
        1150: {
          slidesPerView: 3,
          spaceBetween: 8,
        },
      }
  });


 
  var splide = new Splide( '.splide', {
    type   : 'loop',
    perPage: 3,
    perMove: 1,
    autoplay: 5000,
    breakpoints: {
      540: {
        perPage: 1,
      },
      640: {
        perPage: 1.5,
      },
      768: {
        perPage: 1.8,
      },
      990: {
        perPage: 2,
      },
      1150: {
        perPage: 2.5,
      },
      1216: {
        perPage: 2.9,
      },
    }
  } );
  
  splide.mount();


  

  