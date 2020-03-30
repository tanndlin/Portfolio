images = []

fullscreenDiv = document.getElementById("imageFullscreen");
fullscreenDiv.addEventListener("mouseout", hideFullscreen);

// document.getElementById("bodyContainer").addEventListener("mouseenter", hideFullscreen);


for (i = 0; i <= 14; i++)
    images.push(document.getElementById("image" + i));

for (i = 0; i < images.length; i++) {
    images[i].addEventListener("mouseenter", fullscreen);
    images[i].addEventListener("mouseleave", hideFullscreen);
}

function fullscreen() {
    image = document.querySelectorAll(":hover")[4];

    fullscreenDiv.src = image.src;
    fullscreenDiv.style.visibility = "visible";

}

function hideFullscreen(event) {
    let x = event.clientX;
    let y = event.clientY;

    if (document.elementFromPoint(x, y) != fullscreenDiv) {
        fullscreenDiv.style.visibility = "hidden";
    }
}