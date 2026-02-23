document.addEventListener("mousemove", function (event) {
    var mouseX = event.clientX;
    var mouseY = event.clientY;
    var mouseElement = document.querySelector(".mouse");
    mouseElement.style.left = mouseX + "px";
    mouseElement.style.top = mouseY + "px";
});