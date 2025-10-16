document.addEventListener("DOMContentLoaded", function () {
  if (Swiper) {
    const swiperreviews_2 = new Swiper("#reviews_2 .swiper", {
      loop: true,
      slidesPerView: "auto",
      spaceBetween: 20,
      breakpoints:{
        769: {
          slidesPerView: 1
        },
        1024:{
          slidesPerView: 2
        }
      }
    });
  }
});