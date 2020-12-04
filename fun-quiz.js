var x = 42;
var y;

function timesTwo(num) {
    return num * 2;
}

var doubleX = timesTwo(x);

var numbers = [x, doubleX];

for (i = 0; i < numbers.length; i++) console.log(numbers[i]);

var numbers = {};

numbers.y = doubleX;
