module.exports = function fn(arg1) {
    if (typeof arg1 === "string") {
        newArrg = arg1.split("").reverse().join("");
        return newArrg;
    }
    if (typeof arg1 !== "string" && !Array.isArray(arg1)) {
        return null;
    }
    if (Array.isArray(arg1)) {
        newArray = 
    }
};
