// ===== Fade In Animation =====

window.addEventListener("load", () => {

    document.querySelector(".center-card").style.opacity = "0";
    document.querySelector(".center-card").style.transform = "translateY(50px)";

    setTimeout(() => {

        document.querySelector(".center-card").style.transition =
        "all 1s ease";

        document.querySelector(".center-card").style.opacity = "1";

        document.querySelector(".center-card").style.transform =
        "translateY(0)";

    }, 300);

});


// ===== Floating Avatar Animation =====

const avatar =
document.querySelector(".small-avatar");

let position = 0;
let direction = 1;

setInterval(() => {

    position += direction;

    avatar.style.transform =
    `translateX(-50%) translateY(${position}px)`;

    if(position > 10) direction = -1;

    if(position < -10) direction = 1;

}, 50);


// ===== Download Button Hover =====

const downloadBtn =
document.querySelector(".download-btn");

downloadBtn.addEventListener("mouseenter", () => {

    downloadBtn.style.transform = "scale(1.05)";
    downloadBtn.style.transition = "0.3s";

});

downloadBtn.addEventListener("mouseleave", () => {

    downloadBtn.style.transform = "scale(1)";

});


// ===== App Card Button Hover =====

const appBtn =
document.querySelector(".app-card button");

appBtn.addEventListener("mouseenter", () => {

    appBtn.style.transform = "translateY(-3px)";
    appBtn.style.transition = "0.3s";

});

appBtn.addEventListener("mouseleave", () => {

    appBtn.style.transform = "translateY(0)";

});


// ===== Navigation Hover Effect =====

const navLinks =
document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("mouseenter", () => {

        link.style.color = "#d8ff62";

    });

    link.addEventListener("mouseleave", () => {

        link.style.color = "white";

    });

});