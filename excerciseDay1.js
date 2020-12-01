function logType(arg) {
    if (arg !== arg) {
        console.log("not a number");
    } else if (arg === null) {
        console.log("null!");
    } else if (typeof arg == "string") {
        console.log("string!");
    } else if (typeof arg === "undefined") {
        console.log("undefined!");
    } else if (typeof arg === "boolean") {
        console.log("boolean!");
    } else if (typeof arg === "bigint!") {
        console.log("bigint!");
    } else if (typeof arg === "number") {
        console.log("number!");
    } else if (typeof arg === "function") {
        console.log("function!");
    } else if (Array.isArray(arg)) {
        console.log("array!");
    } else if (typeof arg === "object") {
        console.log("object!");
    } else console.log("I have no idea");
}

function logNaN(arg) {
    if (arg !== arg) {
        console.log("not a number");
    }
}

function logNull(arg) {
    if (arg === null) {
        console.log("null");
    } else console.log("not null");
}

/*  } else if (Number.isNaN(arg)) {
        console.log("not a number!"); 
        
    why is this not working?*/

// 2 -> the part in the while loop i didnt quite get my head around. Peter explained in slack, but i still have troubles following

var a = {
    Berlin: "Germany",
    Paris: "France",
    "New York": "USA",
};

var b = {};

for (var c in a) {
    b[a[c]] = c;
}

// 3

for (var i = 10; i > 0; i--) {
    console.log(i);
}
