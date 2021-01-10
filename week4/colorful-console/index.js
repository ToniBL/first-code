const chalk = require("chalk");
console.log(chalk.blue("test"));
const http = require("http");
const querystring = require("querystring");

const server = http.createServer(function (req, res) {
    req.on("error", (error) => {
        console.log("error on reg obj:", error);
    });
    res.on("error", (error) => {
        console.log("error on res obj:", error);
    });

    if (req.method === "GET") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.write(`<!doctype html>
<html>
<title>Colors</title>
<form method="POST">
  <input type="text" name="text">
  <select name="color">
    <option value="red">red</option>
    <option value="blue">blue</option>
    <option value="green">green</option>
    <option value="yellow">yellow</option>
    <option value="gray">gray</option>
    <option value="magenta">magenta</option>
    <option value="cyan">cyan</option>
  </select>
  <button type="submit">Go</button>
</form>
</html>`);
        res.end();
    } else if (req.method === "POST") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        let body = "";
        req.on("data", (chunk) => {
            body += chunk;
        }).on("end", () => {
            console.log("body inside end listener:", body);
            let str = querystring.parse(body);
            console.log("body str:", str);
            let { color, text } = str;
            console.log(color);
            console.log(chalk[color](text));
            res.write(`<!doctype html>
<html>
<title>${text}</title>
<a href="/" style="color:${color}>${text}</a>
</html>`);
            res.end();
        });
    } else {
        res.statusCode = 404;
        res.end();
    }
});

server.listen(8080, () => console.log("Listening Color server 8080"));
