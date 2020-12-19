(function () {
    console.log("$: ", $);
    var currentPlayer = "player1";

    var allSlots = $(".slot");
    //console.log(allSlots);

    var allHoles = $(".hole");
    //console.log(allHoles);

    $(".column").on("click", function (e) {
        var col = $(e.currentTarget);
        // console.log(col);

        var slotsInCol = col.children();

        for (var i = slotsInCol.length - 1; i >= 0; i--) {
            if (
                !slotsInCol.eq(i).hasClass("player1") &&
                !slotsInCol.eq(i).hasClass("player2")
            ) {
                slotsInCol.eq(i).addClass(currentPlayer);
                break;
            }
        }

        var slotsInRow = $(".row" + i);
        //console.log(slotsInRow);

        function checkDiagonal() {
            for (var i = 0; i < allSlots.length - 1; i++)
                if (
                    allSlots.eq(i).hasClass(currentPlayer) &&
                    allSlots.eq(i + 7).hasClass(currentPlayer) &&
                    allSlots.eq(i + 14).hasClass(currentPlayer) &&
                    allSlots.eq(i + 21).hasClass(currentPlayer) &&
                    // check for nextafter column
                    allSlots
                        .eq(i + 14)
                        .parent()
                        .index() ===
                        allSlots
                            .eq(i + 21)
                            .parent()
                            .index() +
                            1
                ) {
                    console.log("diagonal7");
                    setTimeout(function resetGame() {
                        allSlots.removeClass("player1");
                        allSlots.removeClass("player2");
                    }, 1000);
                } else if (
                    allSlots.eq(i).hasClass(currentPlayer) &&
                    allSlots.eq(i + 5).hasClass(currentPlayer) &&
                    allSlots.eq(i + 10).hasClass(currentPlayer) &&
                    allSlots.eq(i + 15).hasClass(currentPlayer) &&
                    // check for same column
                    allSlots
                        .eq(i + 10)
                        .parent()
                        .index() !==
                        allSlots
                            .eq(i + 15)
                            .parent()
                            .index()
                ) {
                    console.log("diagonal5");
                    setTimeout(function resetGame() {
                        allSlots.removeClass("player1");
                        allSlots.removeClass("player2");
                    }, 1000);
                }
        }

        if (checkForVictory(slotsInCol)) {
            console.log("column victory!!!!");
            setTimeout(function resetGame() {
                allSlots.removeClass("player1");
                allSlots.removeClass("player2");
            }, 1000);
        } else if (checkForVictory(slotsInRow)) {
            console.log("row victory!!!!");
            setTimeout(function resetGame() {
                allSlots.removeClass("player1");
                allSlots.removeClass("player2");
            }, 1000);
        } else if (checkDiagonal()) {
            console.log("diagonal victory!");
            setTimeout(function resetGame() {
                allSlots.removeClass("player1");
                allSlots.removeClass("player2");
            }, 1000);
        }

        switchPlayer();
    }); // closes click handler
    // check for victory (for now, just vertical and horizontal)
    // if the player won in any direction, render a victory message
    // if the player did not win, switch players
    function switchPlayer() {
        if (currentPlayer === "player1") {
            currentPlayer = "player2";
        } else {
            currentPlayer = "player1";
        }
    }

    function checkForVictory(slots) {
        // console.log(slots);
        var counter = 0; // number of adjacent chips in a column
        for (var i = 0; i < slots.length; i++) {
            if (slots.eq(i).hasClass(currentPlayer)) {
                counter++;
                if (counter === 4) {
                    return true;
                }
            } else {
                counter = 0;
                console.log("counter reset to 0 :(");
            }
        }
    }
})();
