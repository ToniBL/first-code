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
(function () {
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
})();

/* convert string into array with split
check characters case mit regular expressio A-Z
check character case mit regular expressions a-z https:stackoverflow.com/questions/49922278/javascript-checking-if-a-letter-is-an-uppercase
transform upper to lower case -> can that happen within the loop
 store in new array convert new array to string

function invertCase(str) {
           var strArr = str.split('');
    console.log(strArr);}

    var upperCaseRegex = /[A-Z]/g; 
    var upper = str.match(regex);
for ( var char in strArr) {
     if (char.match(/[A-Z]/g))
 if (char.match(upperCaseRegex)) {...} */

// 2. got the hint to compare old and new string instead of checking new string from Mikhail, he helped me solve it

function invertCase(str) {
    var strArr = str.split("");
    for (var i = 0; i < strArr.length; i++) {
        if (strArr[i] === strArr[i].toUpperCase()) {
            strArr[i] = strArr[i].toLowerCase();
        } else if (strArr[i] === strArr[i].toLowerCase()) {
            strArr[i] = strArr[i].toUpperCase();
        } else {
            continue;
        }
    }
    console.log(strArr.join(""));
    return strArr.join("");
}
