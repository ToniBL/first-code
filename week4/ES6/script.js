// excercise 1

const backwards = (arr) => {
    let newArr = [...arr];
    return newArr.reverse();
};

const back = (arr) => [...arr].reverse();

// excercise 2

const merge = (arr1, arr2) => {
    newArr = [...arr1, ...arr2];
    return newArr;
};

// excercise 3
let city = {
    name: "Leipzig",
    country: "Germany",
    numPeople: 593.145,
};
const logCity = function ({ name, age, numPeople }) {
    console.log(`${name} is in ${country} and has ${numPeople} in it.`);
};
