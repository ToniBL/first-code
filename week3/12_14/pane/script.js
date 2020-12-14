var slider = $("slider");
console.log(slider);
var sunnies = $("#pane1");
var lagoon = $("pane2");
var isSliding = false;
var x = 0;

slider.on("mousedown", function (e) {
    console.log("slider clicked"); //not working
    x = e.target.offsetX;
});
