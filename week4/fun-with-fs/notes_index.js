console.log("hello to node from js");
const fs = require("fs");

// first argument is the path (method __dirname shows the absolute path to current directory, so we don't have to hardcode) where to create the new file plus the name of the file

const myPath = __dirname;

// the second argument is the content we want to put in the file
// the third argument is a callbackfunction, EVERY ASYNCHRONOUS FUNCTION NEEDS A CALLBACK

fs.writeFile(__dirname + "/adobo.txt", "write file is fun!", (error) => {
    if (error) {
        console.log("error in writeFile", error);
        return;
    }
    // code after if-block runs only if there is no error
    console.log("writeFile is done");
    // if I need code to run AFTER writeFile is done, it needs to be in callback
});
console.log("log AFTER writeFile!");

// synchronous code doesn't need callback:
// sidenote: Errors would be handled with try...catch

const obj = {
    name: "adobo",
};

fs.writeFileSync(myPath + "/my-new-file.json", JSON.stringify(obj));
// if you want to format the JSNON nicely pass arguments to it (obj, null, 4)

// readdir & readdirSync

// Asynch. Takes 3 argunets: the path, an object, the callback
// it returns an array of objects which represent the files and/or folders in the folder we use readdir on
fs.readdir(myPath, { withFileTypes: true }, (err, content) => {
    if (err) {
        console.log("error in readdir", err);
    }
    for (let i = 0; i < content.length; i++) {
        console.log("content", content);
        console.log("isFile?", content[i].isFile()); // isFile exists BECAUSE of {withFileTypes}, it is an optional argument
        console.log("isDirectory?", content[i].isDirectory());
    }
});

// synch Version doesn't need callback. It returns us the object, the return can be stored in an variable
const content = fs.readdirSync(myPath, { withFileTypes: true });
console.log("content", content);

// stat and statSync

// synch Version doesn't need callback. It returns us the object, the return can be stored in an variable

const stat = fs.statSynch(myPath + "index.js");
console.log("stats", stats);

// readfile needs 2 arguntens the path and the callback, 3rd is optional: "utf8" is to translate the returned buffer into readable code in one big string

fs.readFile(myPath + "/index.js", "utf8", (err, data) => {
    if (err) {
        console.log("error in readFile", err);
        return;
    }
    console.log(data);
});

// synch Version
const data = fs.readFileSynch(myPath + "/index.js", "utf8");
console.log(data);
