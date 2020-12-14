alert("ok");

var square = document.querySelector("div");
console.log(square);

function randColor() {
    return Math.floor(Math.random() * 256);
}

square.addEventListener("mousedown", function (e) {
    var r = randColor();
    var g = randColor();
    var b = randColor();
    var randomColor = "rgb(" + r + "," + g + "," + b + ")";

    square.style.background = randomColor;
});

square.addEventListener("mouseup", function (e) {
    var r = randColor();
    var g = randColor();
    var b = randColor();
    var randomColor = "rgb(" + r + "," + g + "," + b + ")";

    square.style.background = randomColor;
});
