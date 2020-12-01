function logType(arg) {
    if (typeof arg == "string") {
        console.log("string!");
    } else if (typeof arg === "boolean") {
        console.log("boolean!");
    } else if (typeof arg === "bigint!") {
        console.log("bigint!");
    } else if (Number.isNaN(arg)) {
        console.log("not a number!");
    } else if (typeof arg === "number") {
        console.log("number!");
    } else console.log("I have no idea");
}
