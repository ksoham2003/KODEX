const nav = document.querySelector(".navbar");

window.addEventListener("wheel", function (dets) {
    if (dets.deltaY > 0) {
        nav.style.transform = "translateY(-100%)";
    } else {
        nav.style.transform = "translateY(0)";
    }
});