console.log("test");

// 1:

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
