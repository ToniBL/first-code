console.log("sanity check!");

var board = document.getElementsByClassName("board")[0];
console.log("board: ", board);
var racers = document.getElementsByClassName("racer");
console.log("racers: ", racers);

var boostBtn = document.getElementById("boost-button");

var leftRacingCar = 0;
var leftMotorbike = 0;
var leftPoliceCar = 0;
var leftTractor = 0;

function getRandomNumber() {
    // gets us a random number between 0 and 50;
    return Math.floor(Math.random() * 51);
}

function getRandomColourNumber() {
    return Math.floor(Math.random() * 256);
}

document.addEventListener("keydown", function () {
    // goal is to create a string like this
    // rgb(0, 223, 235)
    var r = getRandomColourNumber();
    var g = getRandomColourNumber();
    var b = getRandomColourNumber();
    console.log("r, g, b: ", r, g, b);
    var randomColour = "rgb(" + r + "," + g + "," + b + ")";
    console.log("randomColour: ", randomColour);
    board.style.background = randomColour;
});

boostBtn.addEventListener("click", function (event) {
    event.stopPropagation();
    leftRacingCar += 100;
    racers[0].style.left = leftRacingCar + "px";
});

document.addEventListener("click", function () {
    console.log("clicked on the board!!!");
    // leftRacingCar = leftRacingCar + getRandomNumber();
    // the above line can be re-written as so.
    leftRacingCar += getRandomNumber();
    leftMotorbike += getRandomNumber();
    leftPoliceCar += getRandomNumber();
    leftTractor += getRandomNumber();
    racers[0].style.left = leftRacingCar + "px";
    racers[1].style.left = leftMotorbike + "px";
    racers[2].style.left = leftPoliceCar + "px";
    racers[3].style.left = leftTractor + "px";
    console.log("leftRacingCar: ", leftRacingCar);
});
