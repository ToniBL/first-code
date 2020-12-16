(function () {
    console.log("check", $);

    var textarea = $("textarea");
    console.log(textarea);

    var button = $("button");
    console.log(button);

    button.on("click", function () {
        var input = textarea.val();
        //console.log(input);
        try {
            var parseInput = JSON.parse(input);
            //console.log(parseInput);
            textarea.val("yesss yo jiddlediJSON!");
        } catch (err) {
            //console.log(err);
            textarea.val("srrryyy no JSON!");
        }
    });
})();
