(function () {
    // console.log("$: ", $);
    var currentPlayer = "player1";
    // on click (on column) - drop your piece/chip
    // piece/chip should be placed in the lowest available slot in the column that was clicked
    $(".column").on("click", function (e) {
        // console.log("row5: ", $(".row5")); using jquery to grab a reference to a row!
        // console.log("currentTarget: ", e.currentTarget);
        var col = $(e.currentTarget);
        // returns all the slots in the column that was clicked on
        var slotsInCol = col.children();

        // loop through all of the slots in the column
        for (var i = slotsInCol.length - 1; i >= 0; i--) {
            // console.log("slotsinCol.eq(i): ", slotsInCol.eq(i));
            if (
                !slotsInCol.eq(i).hasClass("player1") &&
                !slotsInCol.eq(i).hasClass("player2")
            ) {
                // this only runs on a slot that does NOT have a chip in it
                // add the class player1 or player2 to the slot
                slotsInCol.eq(i).addClass(currentPlayer);
                break; // ends loop
            }
        } // for loop closes

        // returns all the slots in the row that was clicked
        var slotsInRow = $(".row" + i);

        if (checkForVictory(slotsInCol)) {
            console.log("column victory!!!!");
        } else if (checkForVictory(slotsInRow)) {
            console.log("row victory!!!!");
        }

        switchPlayer();
    }); // closes click handler
    // check for victory (for now, just vertical and horizontal)
    // if the player won in any direction, render a victory message
    // if the play did not win, switch players
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
