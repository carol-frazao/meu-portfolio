import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'

const swiper = new Swiper('.swiper', {
    direction              : 'horizontal',
    loop                   : true,
    slidesPerView          : 4,
    spaceBetween           : 30,
    slidesPerGroup         : 1,
    loopFillGroupWithBlank : true,
    navigation             : {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 30,
        }
    }
})

export default swiper

