let yesBtn = document.getElementById("yesBtn");
let noBtn = document.getElementById("noBtn");

let size = 18;

noBtn.addEventListener("click", function () {
    size += 8;
    yesBtn.style.fontSize = size + "px";
    yesBtn.style.padding = (size / 2) + "px " + (size) + "px";

    // move NO button randomly
    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * 80 + "%";
    noBtn.style.top = Math.random() * 80 + "%";
});

yesBtn.addEventListener("click", function () {
    window.location.href = "accept.html";
});