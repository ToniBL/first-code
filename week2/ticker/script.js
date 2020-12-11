(function () {
    var headlines = document.querySelector(".headlines");
    var links = document.getElementsByTagName("a");
    var moveHeadline = document.querySelector(".headlines");
    var left = moveHeadline.offsetLeft;

    function move() {
        left--;
        headlines.style.left = left + "px";
        if (left <= -links[0].offsetWidth) {
            left += links[0].offsetWidth;
            headlines.appendChild(links[0]);
        }

        requestAnimationFrame(move);
    }

    move();
})();
