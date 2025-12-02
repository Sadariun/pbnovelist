document.addEventListener("DOMContentLoaded", function () {
  if (typeof Swiper === "undefined") return;

  const swiperReviews = new Swiper("#reviews .swiper", {
    loop: true,
    spaceBetween: 20,
    initialSlide: 0, 
    slidesPerView: 3,
    centeredSlides: true,
    speed: 550,
    loopedSlides: 5, 
    navigation: {
      nextEl: "#reviews .rev-btn.next",
      prevEl: "#reviews .rev-btn.prev",
      disabledClass: "is-disabled",
    },
    breakpoints: {
      981:  { 
        slidesPerView: 3, 
        spaceBetween: 20,
        centeredSlides: true,
        loopedSlides: 3
      },
      621:  { 
        slidesPerView: 2, 
        spaceBetween: 18,
        centeredSlides: true,
        loopedSlides: 2
      },
      0:    { 
        slidesPerView: 1, 
        spaceBetween: 16,
        centeredSlides: true,
        loopedSlides: 1
      }
    },
  });
});