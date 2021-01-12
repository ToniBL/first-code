const http = require("http");
const fs = require("fs");
const path = require("path");

const contentType = { ".css": "text/css" };
console.log(contentType[".css"]); // this should hold the extension Names for the headers // [] bracket notation because of dot on file ext name

http.createServer((req, res) => {
    req.on("error", (error) => console.log("err in req:", error));
    res.on("error", (error) => console.log("err in res:", error));

    if (req.method != "GET") {
        res.statusCode = 405; // status Code for method not allowed;
        return res.end();
    }

    const filePath = path.normalize(__dirname + "/projects" + req.url);
    console.log("filepath:", filePath);
    console.log(__dirname + "/projects");
    console.log(filePath.startsWith(__dirname + "/projects"));

    if (!filePath.startsWith(__dirname + "/projects")) {
        console.log("intruder");
        res.statusCode = 403; // status forbidden
        return res.end();
    }
    fs.stat(filePath, (err, stats) => {
        // err will occur if the user is requesting something that does not exist
        if (err) {
            console.log("err in fs.stat:", err);
            res.statusCode = 404; // not found
            return res.end();
        }
        if (stats.isFile()) {
            console.log("it is a file");
            console.log("requesting filePath:", filePath);
            // create a readstream to what the user requested
            // pipe the content as a reponse

            // figure out what type of file is being requested so that you can set the correct headers
            console.log(
                "file extenseion of requested file is",
                path.extname(filePath)
            );

            // IF the browser where to request a css file this would be our header
            // res.setHeader("ContentType", "text/css"); // we want the second argument of our setHeader to be dynamic
        } else if (stats.isDirectory() && req.url.endsWith("/")) {
            console.log("it is a directory");
            console.log("requesting filePath:", filePath);
            const readStreamHtml = fs.createReadStream(filePath + "index.html");
            res.setHeader("ContentType", "text/html");
            readStreamHtml.pipe(res);
            readStreamHtml.on("error", (err) => {
                console.log("err in readStreamHtml:", err);
                res.statusCode = 500; // internal server error
                return res.end();
            });
        } else {
            res.statusCode = 302;
            res.setHeader("Location", "/");
            res.end();
            // redirect the user to req.url but add a slask to it :)
            // you did this firday ;), in request-listener
            // remember set your headers, send your status code and end your response
        }
    });
    console.log("ligit req");
}).listen(8080, () => console.log("node portfolio running"));
