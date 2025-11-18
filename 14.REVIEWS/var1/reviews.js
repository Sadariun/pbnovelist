document.addEventListener("DOMContentLoaded", function () {
  if (Swiper) {
    const swiperreviews = new Swiper("#reviews .swiper", {
      loop: true,
      slidesPerView: "auto",
      spaceBetween: 20,
      breakpoints:{
        769: {
          slidesPerView: 1
        },
        1024:{
          slidesPerView: 3
        }
      }
    });
  }
});