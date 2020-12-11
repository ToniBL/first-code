(function () {
    var kitties = document.querySelectorAll("#kitties img");

    var currentKitty = 0;
    var dots = document.getElementsByClassName("dot");
    console.log(dots);

    var timer = 0;

    var isTransitioning = false;

    function moveKitties() {
        isTransitioning = true;
        console.log(currentKitty, arguments);

        kitties[currentKitty].classList.remove("onscreen");

        kitties[currentKitty].classList.add("exit-left");

        /*if (typeof argument[0] === "number") {
           moveKitties = arguments[0]
       } else { */

        currentKitty++;
        if (currentKitty >= kitties.length) {
            currentKitty = 0;

            kitties[currentKitty].classList.add("onscreen");

            timer = setTimeout(moveKitties, 3000);
        }
    }

    document.addEventListener("transitionend", function (event) {
        console.log("transitionend just happened");
        if (event.target.classList.contains("exit-left")) {
            event.target.classList.remove("exit-left");
            isTransitioning = false;
        }
    });

    for (var i = 0; i < dots.length; i++) {
        dots[i].addEventListener("click", function (e) {
            console.log("dot klicked!");

            for (var i = 0; i < dots.length; i++) {
                if (dots[i] == e.target) {
                    if (e.target.classList.contains("on")) {
                        console.log("i:" + i);
                        break;
                    }
                    if (isTransitioning) {
                        return;
                    }
                    clearTimeout(timer);
                    moveKitties(i);
                }
            } //
        });
    }

    timer = setTimeout(moveKitties, 3000); // this get the carousel moving initially
})();
