document.addEventListener("DOMContentLoaded", function () {
  if (Swiper) {
    const swiperReviews = new Swiper("#reviews .swiper", {
      loop: true,
      slidesPerView: "auto",
      spaceBetween: 20,
    });
  }
});