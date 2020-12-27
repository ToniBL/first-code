(function () {
    var userInput = $("input").val();
    var artistOrAlbum = $("select").val();
    console.log("user data: ", userInput, " - ", artistOrAlbum);
    var resultsHtml = "";
    var resultsForHtml = "";

    $(".submit-button").on("click", displayResults());
    $("search-fields").on("keydown", function (e) {
        if (e.which === 13) {
            displayResults();
        }
    });

    function displayResults() {
        $.ajax({
            method: "GET",
            url: "https://spicedify.herokuapp.com/spotify",
            data: {
                query: userInput,
                type: artistOrAlbum,
            },
            success: function (response) {
                response = response.artists || response.albums;
                console.log("response: ", response);

                if (response.items.length === 0) {
                    console.log("no results");
                    resultsHtml = "<div>" + "no results" + "</div>";
                    resultsForHtml = "<div>" + "no results" + "</div>";
                } else {
                    for (var i = 0; i < response.items.length; i++) {
                        var defaultImage =
                            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.1PmkQ0HI-Y5Pw-SZMIOziwHaK6%26pid%3DApi&f=1";
                        if (response.items[i].images.length > 0) {
                            defaultImage = response.items[i].images[0].url;
                        }
                        resultsHtml +=
                            "<div>" +
                            "<p>" +
                            "<a href='" +
                            response.items[i].external_urls.spotify +
                            "'>" +
                            response.items[i].name +
                            "</a>" +
                            "</p>" +
                            "<a href='" +
                            response.items[i].external_urls.spotify +
                            "'>" +
                            "<img class='artist-album' src='" +
                            defaultImage +
                            "'>" +
                            "</a>" +
                            "'>" +
                            "</div>";
                        resultsForHtml =
                            "<div>" +
                            "Results for" +
                            " " +
                            userInput +
                            " </div>";

                        $(".resultsFor").html(resultsForHtml);
                        $(".results-container").html(resultsHtml);
                    }
                }

                // We need to check whether there more results before calling replace.
                // Calling replace on the value null will throw
                //an error!
                // response.next part was here:

                $(".more").on("click", function () {
                    if (response.next === null) {
                        $(".more").css({ visibilty: "hidden" });
                    } else {
                        console.log("response.next: ", response.next);
                        $(".more").css({ visibilty: "visible" });
                        var nextUrl =
                            response.next &&
                            response.next.replace(
                                "api.spotify.com/v1/search",
                                "spicedify.herokuapp.com/spotify"
                            );
                        console.log("nextUrl: ", nextUrl);
                    }
                    $.ajax({
                        method: "GET",
                        url: nextUrl,
                        data: {
                            query: userInput,
                            type: artistOrAlbum,
                        },
                        success: function (response) {
                            response = response.artists || response.albums;
                            //function displayResults(response) instead of repeating code, but how?
                            for (var i = 0; i < response.items.length; i++) {
                                var defaultImage =
                                    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.1PmkQ0HI-Y5Pw-SZMIOziwHaK6%26pid%3DApi&f=1";

                                if (response.items[i].images.length > 0) {
                                    defaultImage =
                                        response.items[i].images[0].url;
                                }
                                resultsHtml +=
                                    "<div>" +
                                    "<p>" +
                                    "<a href='" +
                                    response.items[i].external_urls.spotify +
                                    "'>" +
                                    response.items[i].name +
                                    "</a>" +
                                    "</p>" +
                                    "<a href='" +
                                    response.items[i].external_urls.spotify +
                                    "'>" +
                                    "<img class='artist-album' src='" +
                                    defaultImage +
                                    "'>" +
                                    "</a>" +
                                    "'>" +
                                    "</div>";
                                resultsForHtml =
                                    "<div>" +
                                    "Results for" +
                                    " " +
                                    userInput +
                                    " </div>";
                            }
                            $(".results-container").html(resultsHtml);
                        },
                    });
                });
            },
        });
    }
})();
