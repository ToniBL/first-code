// 1.

function Rectangle (width, height) {
    getArea: function () {
        return width * height;
    }
}
function Square (num) {
    Rectangle.call(this, getArea)
}



Rectangle.prototype.getArea = function () {
    return width * height;}