var boxes = document.querySelectorAll(".box");

boxes.forEach(function (elem) {
    elem.addEventListener("click", function () {
        boxes.forEach(function (val) {
            val.style.flex = 1;
            val.childNodes[1].style.opacity = 1;
            val.childNodes[3].style.opacity = 0;
        });

        elem.style.flex = 5;
        elem.childNodes[1].style.opacity = 0.5;
        elem.childNodes[3].style.opacity = 1;
    });
});