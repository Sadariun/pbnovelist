document.addEventListener("DOMContentLoaded", function () {
    if (Swiper) {
        var swiper = new Swiper(".toc__container", {
            slidesPerView: "auto",
            spaceBetween: 24,
            scrollbar: {
                el: '.swiper-scrollbar',
                draggable: true,
                hide: true,
            }})}})

       