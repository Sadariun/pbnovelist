document.addEventListener("DOMContentLoaded", function (){
if (Swiper) {
var swiper = new Swiper(".gallery", {
            slidesPerView: "6",
            spaceBetween: 20,
            draggable: true,
            loop: true,
            navigation: {
                nextEl: ".arrow.right",
                prevEl: ".arrow.left",
                disabledClass: "disabled",
            },
            breakpoints: {
                0: {
                    slidesPerView: "auto",
                    centeredSlides: true,
                    initialSlide: 1,
                },
                769: {
                    slidesPerView: "3",
                },
                1024: {
                    slidesPerView: "6",
                },
            },
        });}})