// 3. first solution only works when not inside the iife

(function () {
    function getLessThanZero(arr) {
        var negativ = arr.filter(function (num) {
            if (num < 0) {
                return true;
            }
        });
        return negativ;
    }
})();

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
        var arrCopy = arr.slice();
        var arrReverse = arrCopy.reverse();
        return arrReverse;
    }
})();

//1
//! first if else to check if it is an array.isArray / for array for loop, for object for in
function each(arrOb, callBack) {
    if (isArray(arrOb) == true) {
        for (i = 0; i < arrOb.length; i++) {
            
        }
        
    } else {
         for (key in arrOb) {
            key(callBack);
    }
}
