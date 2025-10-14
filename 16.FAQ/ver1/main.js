document.addEventListener("DOMContentLoaded", function () {


    function setParagraphMarginTop(paragraph) {
        if (window.innerWidth < 768) {
            paragraph.style.marginTop = "0";
        } else {
            paragraph.style.marginTop = "0";
        }
    }

    function toggleAccordionIcon(item, isOpen) {
        var iconParagraph = item.querySelector(".accord__item>div:first-child>p");
        if (iconParagraph) {
            if (isOpen) {
                iconParagraph.textContent = "-";
            } else {
                iconParagraph.textContent = "+";
            }
        }
    }

    var sections = document.querySelectorAll("section");
    sections.forEach(function (section) {
        var items = section.querySelectorAll(".accord__item");
        if (items.length > 0) {
            var firstItem = items[0];
            var descr = firstItem.querySelector("div + div");
            setTimeout(() => {
                descr.classList.add("show");

                var firstParagraph = descr.querySelector("p");

                if (firstParagraph) {
                    firstParagraph.style.visibility = "visible";
                    setParagraphMarginTop(firstParagraph);
                }

                descr.style.maxHeight = descr.scrollHeight  + "px";
                
                // Устанавливаем иконку "-" для первого открытого элемента
                toggleAccordionIcon(firstItem, true);
            }, 0);

            items.forEach(function (item) {
                // Устанавливаем иконку "+" для всех остальных элементов
                if (item !== firstItem) {
                    toggleAccordionIcon(item, false);
                }

                item.addEventListener("click", function () {
                    var descr = item.querySelector("div + div");
                    var secondDiv = item.querySelector("div + div");
                    var paragraph = secondDiv
                        ? secondDiv.querySelector("p")
                        : null;

                    // Закрываем все другие аккордеоны
                    items.forEach(function (otherItem) {
                        if (otherItem !== item) {
                            var otherDescr = otherItem.querySelector("div + div");
                            var otherSecondDiv = otherItem.querySelector("div + div");
                            var otherParagraph = otherSecondDiv
                                ? otherSecondDiv.querySelector("p")
                                : null;
                            
                            otherDescr.classList.remove("show");
                            otherDescr.style.maxHeight = "0";
                            if (otherParagraph) {
                                otherParagraph.style.visibility = "hidden";
                                otherParagraph.style.marginTop = "0";
                            }
                            // Меняем иконку на "+" для закрытых аккордеонов
                            toggleAccordionIcon(otherItem, false);
                        }
                    });

                    // Переключаем текущий аккордеон
                    if (descr.classList.contains("show")) {
                        descr.classList.remove("show");
                        descr.style.maxHeight = "0";
                        if (paragraph) {
                            paragraph.style.visibility = "hidden";
                            paragraph.style.marginTop = "0";
                        }
                        toggleAccordionIcon(item, false);
                    } else {
                        descr.classList.add("show");
                        descr.style.maxHeight = descr.scrollHeight + "px";
                        if (paragraph) {
                            paragraph.style.visibility = "visible";
                            setParagraphMarginTop(paragraph);
                        }
                        toggleAccordionIcon(item, true);
                    }
                });
            });
        }
    });

    window.addEventListener("resize", function () {
        var sections = document.querySelectorAll("section");
        sections.forEach(function (section) {
            var items = section.querySelectorAll(".accord__item");
            items.forEach(function (item) {
                var descr = item.querySelector("div + div");
                if (descr.classList.contains("show")) {
                    var paragraph = descr.querySelector("p");
                    if (paragraph) {
                        setParagraphMarginTop(paragraph);
                    }
                }
            });
        });
    });
});