// 1
(function () {
    function returnSum() {
        console.log(arguments);
        var sum = 0;
        for (var i = 0; i < arguments.length; i++) {
            sum += arguments[i];
        }
        return sum;
    }
})();

// 2

/* (function () {
    function waitThenRun() {
        setTimeout(function () {
            console.log("hello");
        }, 1500);
    }
})();*/

function waitThenRun(fn) {
    setTimeout(fn, 1500);
    return;
}

// 3:  the recursion runs when evoked alone, but not in the context of the wohle function. why?
(function () {
    function count(num) {
        if (num <= 0 || isNaN(num)) {
            return "ERROR";
        } else if (num >= 1000000) {
            return num;
        } else {
            function multi(num) {
                console.log(num);
                if (num >= 1000000) {
                    return;
                } else {
                    multi(num * 10);
                }
            }
        }
    }
})();

(function () {
    function count(num) {
        if (num <= 0 || isNaN(num)) {
            return "ERROR";
        } else if (num >= 1000000) {
            return num;
        } else if (num >= 1000000) {
            return;
        } else {
            return num * 10;
        }
    }
})();

// Bonus
