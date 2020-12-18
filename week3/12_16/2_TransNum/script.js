(function () {
    var button = $(".btn");
    console.log(button);
    var translation = $("textarea");
    console.log(translation);

    var nummern = [
        "zero",
        "eins",
        "zwei",
        "drei",
        "vier",
        "fünf",
        "sechs",
        "sieben",
        "acht",
        "neun",
        "zehn",
    ];

    button.on("click", function translateNumberToGerman() {
        try {
            askForNumber();
            return;
        } catch (err) {
            console.log(err);
            translateNumberToGerman();
        }
    });

    function askForNumber() {
        var num = prompt("Please enter a number between 1 and 10");
        if (num >= 1 && num <= 10 && num == parseInt(num)) {
            console.log(nummern[num]);
            translation.html(nummern[num]);
            return num;
        }
        throw new Error("Bad number");
    }
})();
