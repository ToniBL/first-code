// ToDo: - link from welcome page to project-description
//- img in project description -> projects folder and const projects (Json) have the same mane, maybe that's the problem
//- launch botton on description page

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
        title: "welcome",
        layout: "main",
        style: "welcome.css",
        projects,
    });
});

app.get("/projects/:project", (req, res) => {
    const { project } = req.params;
    const selectProject = projects.find((item) => item.dirName == project);
    console.log(selectProject);
    if (!selectProject) {
        // what about "/about"?
        return res.sendStatus(404);
    } else {
        console.log("req.params project is project");
        res.render("description", {
            title: "Description",
            layout: "main",
            style: "welcome.css",
            projects,
            selectProject,
        });
    }
});

app.listen(8080, () => console.log("server hb portfolio listening"));
