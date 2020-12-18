(function (countries) {
    console.log(countries);
    var searchField = $("input");
    var resultsContainer = $(".results");
    console.log("resultsContainer:", resultsContainer);
    var document = $("document");
    console.log(document);

    // 1. input event
    searchField.on("input", function () {
        console.log("input done");
        var inputVal = searchField.val().toLowerCase();
        console.log(inputVal);

        $.ajax({
            method: "GET",
            url: "https://spicedworld.herokuapp.com/",
            data: {
                q: inputVal,
            },
            success: function (response) {
                var currentInput = searchField.val();
                if (currentInput === inputVal) {
                    console.log("response:", response);
                } else {
                    console.log("response no longer needed");
                }
            },
        });

        if (inputVal.length === 0) {
            console.log("input field empty");
            resultsContainer.hide();
        }

        /* var htmlForCountries = "";
       /for (var j = 0; j < matchResults.length; j++) {
            htmlForCountries +=
                "<p class='country'>" + matchResults[j] + "</p>";
        }
        console.log("html we will be injecting:", htmlForCountries);
        resultsContainer.html(htmlForCountries); */

        // 2. mouseover event

        $("p").on("mouseover", function (e) {
            console.log("mouse over country!");
            $(e.target).addClass("highlight");
        });
        $("p").on("mouseleave", function (e) {
            console.log("mouse leaves country");
            $(e.target).removeClass("highlight");
        });
    });

    // 3. mousedown event
    resultsContainer.on("mousedown", function (e) {
        var select = $(e.target).text();
        searchField.val(select);
        resultsContainer.hide();
    });

    // 4. still to add the keydown
    document.on("keydown", function (e) {
        if (e.keyCode === 40) {
            console.log("arrow down");
        }
    });
})();
