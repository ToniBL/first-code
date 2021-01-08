const http = require("http");

const server = http.createServer(function (request, response) {
    request.on("error", (error) => {
        console.log("error on request obj:", error);
    });
    console.log("request.headers: ", request.headers);
    console.log("request.url: ", request.url);
    console.log("request.method: ", request.method); // request Body
    let body = "";
    request
        .on("data", (chunk) => {
            body += chunk;
        })
        .on("end", () => {
            console.log("request body:", body);
        });
    // End of request

    response.on("error", (error) => {
        console.log("error on response obj:", error);
    });
    if (request.method === "GET") {
        response.statusCode = 200;
        response.setHeader("content-type", "text/html");
        response.write("<!doctype html>");
        response.write("<title>Hello World!</title>");
        response.write("<p>Hello World!</p>");
        response.end();
    } else if (request.method === "HEAD") {
        response.statusCode = 200;
        response.end();
    } else if (request.method === "POST") {
        console.log("POST request body:", body);
        response.statusCode = 302;
        response.setHeader("Location", "/");
        response.end();
    } else {
        response.statusCode = 405;
        response.end();
    }
});

server.listen(8080, () => console.log("server listening to port 8080"));
