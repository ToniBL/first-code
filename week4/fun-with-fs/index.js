// excercise 1

const fs = require("fs");
//console.log("hello to node from js");

const myPath = `${__dirname}/files`;
//console.log(myPath);
/*
function logSizes(myPath) {
    fs.readdir(myPath, { withFileTypes: true }, (err, data) => {
        if (err) {
            console.log("error in readdir", err);
            return;
        }
        console.log("data", data);
        for (let i = 0; i < data.length; i++) {
            console.log(data[i]);
            let newPath = `${myPath}/${data[i].name}`;
            //  console.log("isFile", data[i].isFile());
            // console.log("isDir", data[i].isDirectory());
            if (data[i].isFile() == true) {
                fs.stat(newPath, (err, stats) => {
                    if (err) {
                        console.log("err in stat", err);
                        return;
                    }
                    // console.log("stats:", stats.size);
                    console.log(`${newPath}:${stats.size}`);
                });
            }
            if (data[i].isDirectory()) {
                logSizes(newPath);
            }
        }
    });
}
logSizes(myPath);
*/
// excercise 2

function mapSizes(myPath) {
    let data = fs.readdirSync(myPath, { withFileTypes: true });
    // console.log(data);
    let obj = {};
    console.log("obj", obj);
    for (let i = 0; i < data.length; i++) {
        //  console.log(data[i]);
        let newPath = `${myPath}/${data[i].name}`;

        if (data[i].isFile() == true) {
            let stats = fs.statSync(newPath);

            // console.log("stats:", stats);
            console.log("size", stats.size);
            obj[data[i].name] = stats.size;

            console.log("obj after loop", obj);
        }
        if (data[i].isDirectory()) {
            obj[data[i].name] = mapSizes(newPath);
        }
    }
    return obj;
}
let newObj = mapSizes(myPath);
console.log("newObj:", newObj);
JSON.stringify(newObj);

fs.writeFileSync(myPath + "/file.json", JSON.stringify(newObj, null, 4));
