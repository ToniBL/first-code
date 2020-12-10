(function () {
    var kitties = document.querySelectorAll("#kitties img");
    // console.log("kitties:", kitties);
    var currentKitty = 0; // this will hold the index position of the kitten currently featured on screen

    function moveKitties() {
        console.log("I am eventually going to move the kitties!");

        console.log(currentKitty);
        // 1. first we need to remove the onscreen class from the kitten currently on screen
        kitties[currentKitty].classList.remove("onscreen");

        // 2. make the kitten on screen exit to the left, we do this by adding exit-left to said kitten
        kitties[currentKitty].classList.add("exit-left");
        // 3. next kitty in line needs to be moved on screen

        currentKitty++;
        if (currentKitty >= kitties.length) {
            currentKitty = 0;
        }
        kitties[currentKitty].classList.add("onscreen");
        // need to stop our counting once we reach a number higher than avaiable kitty indexes
    }

    document.addEventListener("transitionend", function (event) {
        console.log("transitionend just happened");
        if (event.target.classList.contains("exit-left")) {
            event.target.classList.remove("exit-left");
        }
        if (event.target.classList.contains("onscreen")) {
            moveKitties();
        }

        // transionsend fired whenever a CSS transition has completed when the kitty has moved fully off screen, we want to remove the exit-left
    });
    setTimeout(moveKitties, 3000); // this get the carousel moving initially
})();
