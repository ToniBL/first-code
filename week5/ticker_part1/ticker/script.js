(function () {
    console.log("check", $);

    var headlines = $(".headlines");
    // console.log(headlines);
    var links = $("a");
    // console.log(links);
    var moveHeadline = $(".headlines");
    // console.log(moveHeadline);
    var moveLeft = moveHeadline.offset().left;
    // console.log(moveLeft);

    $.ajax({
        url: "data.json",
        method: "GET",
        data: {
            limit: 20,
        },
        success: function (data) {
            console.log(data);
            headlines.html(data);

            var title;

            for (var i = 0; i < data.length; i++) {
                title += `<a href=${data[i].href}> ${data[i].text} </a>`;
            }
            headlines.html(title);
        },
    });

    function move() {
        moveLeft--;
        console.log(moveLeft);

        if (moveLeft < -links.eq(0).outerWidth()) {
            moveLeft += links.eq(0).outerWidth();
            links.eq(0).appendTo(headlines);
        }
        headlines.css({
            left: moveLeft + "px",
        });

        requestAnimationFrame(move);
    }

    move();
})();
