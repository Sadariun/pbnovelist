document.addEventListener("DOMContentLoaded", function (){
if (Swiper) {
var swiper = new Swiper(".heroSwiper", {
            slidesPerView: "3",
            spaceBetween: 64,
            // draggable: true,
            loop: true,
            navigation: {
                nextEl: ".heroarrow.right",
                prevEl: ".heroarrow.left",
                disabledClass: "disabled",
            },
            breakpoints: {
                0: {
                    slidesPerView: "auto",
                    centeredSlides: true,
                    initialSlide: 1,
                },
                769: {
                    slidesPerView: "1",
                },
                1024: {
                    slidesPerView: "3",
                },
            },
        });}})