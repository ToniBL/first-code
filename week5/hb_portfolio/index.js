const express = require("express");
const app = express();
const hb = require("express-handlebars");
const projects = require("./proj");

app.engine("handlebars", hb({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static("./projects"));
app.use(express.static("./public"));

app.get("/about", (req, res) => {
    res.render("welcome", {
        title: "welcome", //not working
        layout: "main",
        title: "welcome",
        style: "welcome.css",
        projects,
    });
});

app.listen(8080, () => console.log("server hb portfolio listening"));
