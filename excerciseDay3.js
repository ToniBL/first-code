// 3.

function getLessThanZero(arr) {
    return arr.filter(function (negativ) {
        if (negativ < 0) {
            return negativ;
        }
    });
}

// 2.
(function () {
    function flip(arr) {
        arrCopy = arr.slice();
        arrReverse = arrCopy.reverse();
        return arrReverse;
    }
})();

//1
//! first if else to check if it is an array.isArray / for array for loop, for object for in
function each(arrOb, callBack) {
    if (isArray(arrOb) == true) {
        for (key in arrOb) {
            key(callBack);
        }
    }
}
