(function () {
    console.log("sanity check!", $);

    var board = $(".board");
    console.log("board: ", board);
    var racers = $(".racer");
    console.log("racers: ", racers);

    var boostBtn = $("#boost-button");

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

    $(document).on("keydown", function () {
        var r = getRandomColourNumber();
        var g = getRandomColourNumber();
        var b = getRandomColourNumber();
        console.log("r, g, b: ", r, g, b);
        var randomColour = "rgb(" + r + "," + g + "," + b + ")";
        board.css({
            background: randomColour,
        });
    });

    // document.addEventListener("keydown", function () {
    // goal is to create a string like this
    // rgb(0, 223, 235)

    //    console.log("randomColour: ", randomColour);
    //    board.style.background = randomColour;
    //});

    boostBtn.on("click", function (event) {
        event.stopPropagation();
        leftRacingCar += 100;
        racers.eq(0).css({
            left: leftRacingCar + "px",
        });
        boostBtn.html("BOOST DEPLETED");
        boostBtn.off("click");
    });

    /*boostBtn.addEventListener("click", function (event) {
        event.stopPropagation();
        leftRacingCar += 100;
        racers[0].style.left = leftRacingCar + "px";
    }); */

    $(document).on("click", function () {
        console.log("clicked on the board!!!");
        leftRacingCar += getRandomNumber();
        leftMotorbike += getRandomNumber();
        leftPoliceCar += getRandomNumber();
        leftTractor += getRandomNumber();
        racers.eq(0).css({
            left: leftRacingCar + "px",
        });
        racers.eq(1).css({
            left: leftMotorbike + "px",
        });
        racers.eq(2).css({
            left: leftPoliceCar + "px",
        });
        racers.eq(3).css({
            left: leftTractor + "px",
        });
    });
    // document.addEventListener("click", function () {
    //    console.log("clicked on the board!!!");
    // leftRacingCar = leftRacingCar + getRandomNumber();
    // the above line can be re-written as so.
    //   leftRacingCar += getRandomNumber();
    // leftMotorbike += getRandomNumber();
    // leftPoliceCar += getRandomNumber();
    // leftTractor += getRandomNumber();
    //   racers[0].style.left = leftRacingCar + "px";
    // racers[1].style.left = leftMotorbike + "px";
    // racers[2].style.left = leftPoliceCar + "px";
    // racers[3].style.left = leftTractor + "px";
    // console.log("leftRacingCar: ", leftRacingCar);
})();
