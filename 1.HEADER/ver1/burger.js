document.addEventListener("DOMContentLoaded", function () {
    const burger = document.querySelector(".mobile__menu");
    const burgerIcon = document.querySelector(".burger");
    const nav = document.querySelector(".header__nav");
    const html = document.querySelector("html");
    const navLinks = document.querySelectorAll(".header__nav a");

    burger.addEventListener("click", function () {
        burgerIcon.classList.toggle("open");
        nav.classList.toggle("navOpen");

        // if (html.style.overflow === "hidden") {
        //     html.style.overflow = "";
        // } else {
        //     html.style.overflow = "hidden";
        //     window.scrollTo({ top: 0, behavior: "smooth" });
        // }
    });

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            burgerIcon.classList.remove("open");
            nav.classList.remove("navOpen");
            // html.style.overflow = "";
        });
    });

    
});
