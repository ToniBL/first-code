(function translateNumberToGerman() {
    console.log("check", $);
    var button = $("button");
    console.log(button);

    var nummern = [
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

    button.on("click", function askForNumber() {
        var num = prompt("Please enter a number between 1 and 10");
        if (num >= 1 && num <= 10 && num == parseInt(num)) {
            console.log(nummern[num]);
            return num;
        }
        throw new Error("Bad number");
    });
    try {
        askForNumber();
        console.log(nummern[num]);
        return nummern[num];
    } catch (err) {
        console.log("Bad number");
    }
})();
