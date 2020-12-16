(function () {
    console.log("check", $);

    var text = $("textarea");
    console.log(text);

    var button = $(".btn");
    console.log(button);

    var buttontwo = $(".btn2");
    console.log(buttontwo);

    button.on("click", function () {
        var storage = text.val();
        localStorage.setItem("key", storage);
        console.log(storage);
        text.val("").empty();
    });

    buttontwo.on("click", function () {
        $(text).val(localStorage.getItem("key"));
    });
})();
