let swiperCards = new Swiper('.card__content', {
  direction: 'horizontal',
  loop: true,
  spaceBetween: 32, 
  grabCursor: true,

  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


  breakpoints:{
    1:{
        slidesPerView: 2,
    },
    500:{
        slidesPerView: 2,
    },
    600:{
        slidesPerView: 3,
    },
    900:{
        slidesPerView: 4,
    }
  }
});