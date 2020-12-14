(function () {
    console.log("check", $);

    var headlines = $(".headlines");
    console.log(headlines);

    var links = $("a");
    console.log(links);

    var moveHeadline = $(".headlines");
    console.log(moveHeadline);

    //var headlines = document.querySelector(".headlines");
    //var links = document.getElementsByTagName("a");
    //var moveHeadline = document.querySelector(".headlines");
    var left = moveHeadline.offset();
    console.log(left.left);

    function move() {
        left.left--;
        console.log(left.left);
        if (left.left <= links.eq(0).width()) {
            left.left += links.eq(0).width();
            headlines.append(links(0));
        }
    }

    //function move() {
    //left--;
    //headlines.style.left = left + "px";
    // if (left <= -links[0].offsetWidth) {
    //   left += links[0].offsetWidth;
    //   headlines.appendChild(links[0]);
    //  }

    /* code copy from solution 
        headlines.addEventListener("mouseenter", function (e) {
            cancelAnimationFrame(headlines.style.left);
        });

        headlines.addEventListener("mouseleave", function () {
            move();
        }); 
        // code copy ends here */

    requestAnimationFrame(move);

    move();
})();
