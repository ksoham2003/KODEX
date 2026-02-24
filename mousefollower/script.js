const mouseElement = document.querySelector(".mouse");

document.addEventListener("mousemove", function (event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const width = window.innerWidth;
    const height = window.innerHeight;

    const isInCentralX = mouseX > width * 0.4 && mouseX < width * 0.6;
    const isInCentralY = mouseY > height * 0.4 && mouseY < height * 0.6;

    if (isInCentralX && isInCentralY) {
        mouseElement.classList.add("expanded");
    } else {
        mouseElement.classList.remove("expanded");
        mouseElement.style.left = mouseX + "px";
        mouseElement.style.top = mouseY + "px";
    }
});