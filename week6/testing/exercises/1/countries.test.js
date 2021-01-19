const countries = require("./countries");

test("passed an empty string, find returns an empty array", () => {
    const result = countries.find("");
    expect(result).toEqual([]);
});

test("The array find returns has max 4 matches", () => {
    expect(countries.find("a").length).toStrictEqual(4);
});

test("The search is case insensitive", () => {
    const result = countries.find("ango");
    expect(result).toEqual(["Angola"]);
});

test("If no matching countries, find returns empty array", () => {
    const result = countries.find("Fantasia");
    expect(result).toEqual([]);
});
