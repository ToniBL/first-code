const url = require("url");
const querystring = require("querystring");

const testUrl = url.parse(process.argv[2]);
// process.argv returs an array of the commandline arguments passed when process was launched. [0] = process.execPath, [1] = path to js file, therefore parse [2] which is the additional commanline argument, in this case the URLstring we want to parse
console.log(testUrl);

// I understand what to do, but i don't know how: How do I pass the test url to the const to have use the above methods?
