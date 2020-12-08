console.log("test");

// 1: it works only on x, not y axis and i can't see why
var square = document.querySelector("div");
console.log(square);
var x;
var y;
document.addEventListener("mousemove", function (e) {
    x = e.clientX - 50;
    y = e.clientY - 50;
    square.style.left = x + "px";
    square.style.top = y + "px";
});
