document.addEventListener("DOMContentLoaded", function () {
  if (Swiper) {
    const swiperreviews = new Swiper("#reviews .swiper", {
      loop: true,
      slidesPerView: "auto",
      spaceBetween: 20,
      navigation: {
                nextEl: ".reviewControlsRight",
                prevEl: ".reviewControlsLeft",
                disabledClass: "disabled",
            },
      breakpoints:{
        769: {
          slidesPerView: 1
        },
        1024:{
          slidesPerView: 1.3
        }
      }
    });
  }
});