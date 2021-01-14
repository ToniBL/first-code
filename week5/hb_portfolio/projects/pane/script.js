var box = $("#box");
console.log(box);
var slider = $("#slider");
console.log(slider);

var paneOne = $("#pane1");
console.log(paneOne);

var paneTwo = $("#pane2");
console.log(paneTwo);

var boxWidth, boxLeft, offset;
//pseudocode: on mousedown check position slider on x-axsis (where is the slider in relation to the width of the box?) and start listening to mousemove: ;
//mousemove save x coordinate & position slider there;set width of top image to x position of slider
//mouseup: stop listeneing to mousemove -> box.off("mousemove")

slider.on("mousedown", function (e) {
    boxWidth = box.outerWidth();
    console.log(boxWidth);
    boxLeft = box.offset().left;
    console.log("boxLeft is distance from body left:", boxLeft);
    var slideX = slider.position().left;
    console.log("slideX is sliders distance from boxLeft inside box", slideX);
    var pointerX = e.clientX - boxLeft;
    console.log("e.clientX is cursor distance from body left:", e.clientX);
    console.log(
        "pointerX is cursor distance from boxLeft inside box :",
        pointerX
    );
    offset = pointerX - slideX;
    console.log("offset is cursor position - slider position:", offset);
    box.on("mousemove", moveSlider);
    e.preventDefault();
});

function moveSlider(e) {
    if (e.clientX > boxLeft + boxWidth) {
        // cursor is on the rightside outside the box
        return;
    }
    if (e.clientX < boxLeft) {
        // cursor is on the lft outside the box
        return;
    }
    var px = e.clientX - boxLeft - offset + "px";
    slider.css({
        left: px,
    });
    paneTwo.css({
        width: px,
    });
}
