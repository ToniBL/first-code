var slider = $("slider");
console.log(slider);
var sunnies = $("#pane1");
var lagoon = $("pane2");
var isSliding = false;
var postitionSlider = 0;

slider.on("mousedown", function (e) {
    console.log("slider clicked"); //not working
   // mousemove, capture offsetX in positionSlider
    postitionSlider = e.target.offsetX;
    slider.css({
        left = postitionSlider,
    })
    

});
