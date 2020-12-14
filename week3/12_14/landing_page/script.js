// modal
(function () {
    var mod = $(".modal");

    var x = $("#exitModal");

    var overlayMod = $("#overlayMod");
    var exitMod = $("#exitMod");
    setTimeout(function () {
        mod.css({
            visibility: "visible",
            "z-index": 100,
        });
        overlayMod.css({
            visibility: "visible",
        });
    }, 1000);

    x.on("click", function (e) {
        mod.css({
            visibility: "hidden",
        });
        overlayMod.css({
            visibility: "hidden",
        });
    });
})(); // iife closing

(function () {
    var burger = document.getElementById("nav");
    console.log(burger);

    var nav = document.getElementById("side-nav");
    console.log(nav);

    var close = document.getElementById("close");
    console.log(close);

    var overlay = document.getElementById("overlay");
    console.log(overlay);

    burger.addEventListener("click", function () {
        console.log("burger klicked");
        nav.classList.add("on");
        overlay.classList.add("vis");
    });

    overlay.addEventListener("click", function () {
        overlay.classList.remove("vis");
    });
    close.addEventListener("click", function () {
        console.log("x clicked!"); // i can't figure out, why this is not working...
    });
})(); //iife closing
