// 1. I thought call() was the way to go about it (https://medium.com/@thejasonfile/borrowing-methods-from-a-function-in-javascript-713a0beed40d), but even in Rectangle it errors me: getArea not defined;

function Rectangle(width, height) {
    getArea = function () {
        return width * height;
    };
}
function Square(num) {
    Rectangle.call(this, getArea);
}

var square = new Square(4);
square.getArea();

// 1. with Prototype

function Rectangle(width, height) {
    this.width = width;
    this.height = height;
}
function Square(num) {
    this.width = num;
    this.height = num;
}

Object.prototype.getArea = function () {
    console.log(this.width * this.height);
};

// 2.
// convert string into array with split
// loop the array to find Uppercase (How?)
// transform upper to lower case -> can that happen within the loop
// store in new array
// convert new array to string

function invertCase(str) {
    var newStr = str.split();
    return newStr;
}
