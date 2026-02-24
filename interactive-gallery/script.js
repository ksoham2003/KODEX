var boxes = document.querySelectorAll(".box");

boxes.forEach(function (elem) {
    elem.addEventListener("mousemove", function (dets) {
        elem.childNodes[1].style.transform = `translate(${dets.x / 50}px, ${dets.y / 50}px) scale(1.2)`;
        elem.childNodes[3].style.transform = `translate(${dets.x / 100}px, ${dets.y / 100}px)`;
    });

    elem.addEventListener("mouseleave", function () {
        elem.childNodes[1].style.transform = `translate(0,0) scale(1)`;
        elem.childNodes[3].style.transform = `translate(0,0)`;
    });
});

var cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", function (dets) {
    cursor.style.left = dets.x + "px";
    cursor.style.top = dets.y + "px";
});