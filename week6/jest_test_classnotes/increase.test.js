//const jest = require("jest");
const { increase } = require("./increase");

// testing NaN
test("increase returns the string ERROR, when passed NaN", () => {
    const result = increase(NaN);
    expect(result).toBe("ERROR");
});

// testing 0

test("increase returns the string ERROR, when passed 0", () => {
    const result = increase(0);
    expect(result).toBe("ERROR");
});

// testing higher than 1000000
test("n>1.000.000 increase returns that number", () => {
    const result = increase(12000000);
    expect(result).toBe(12000000);
});
