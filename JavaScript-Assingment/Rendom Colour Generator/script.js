let boxes = document.querySelectorAll(".box");
let button = document.querySelector("button");

function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;

}

button.addEventListener("click", function () {
    boxes.forEach(function (box) {
        box.style.backgroundColor = getRandomColor();
    });
});

