alert("test");

var outer = document.querySelector("div");
console.log(outer);

var inner = document.getElementById("inner");
console.log(inner);

function randColor() {
    return Math.floor(Math.random() * 256);
}

outer.addEventListener("click", function (e) {
    event.stopPropagation();
    var r = randColor();
    var g = randColor();
    var b = randColor();
    var randomColor = "rgb(" + r + "," + g + "," + b + ")";

    outer.style.background = randomColor;
});

inner.addEventListener("click", function (e) {
    event.stopPropagation();
    var r = randColor();
    var g = randColor();
    var b = randColor();
    var randomColor = "rgb(" + r + "," + g + "," + b + ")";

    inner.style.background = randomColor;
});
