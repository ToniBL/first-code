const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use((req, res, next) => {
    console.log("req.cookies: ", req.cookies);
    console.log(`A ${req.method} request was made to the ${req.url} route`);
    next();
});
app.use(express.static("./public"));
app.use(express.static("./projects"));

app.get("/", (req, res) => {
    res.cookie("first-cookie", "AMAZING!");
    res.send("<h1>i am page</h1>");
});

app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/users/:username/:postId", (req, res) => {
    const { username, postId } = req.params;
    res.send(`
        <h1>This is the page for user ${username}</h1>
        <h2>This is their post with the id ${postId}</h2>
    `);
});

app.get("/register", (req, res) => {
    res.send(`
        <h2>Please tell us about yourself</h2>
        <form method='POST' style="display: flex; flex-direction: column; justify-content: space-between; width: 40%; height: 50%;">
            <input type='text' name='firstname' placeholder='First Name' autocomplete='off'>
            <input type='text' name='lastname' placeholder='Last Name' autocomplete='off'>
            <div>
                <span>How old are you? </span><input type="number" name="age">
            </div>
            <div>
                <input type="checkbox" name="subscribe"><span>Would you like to receive our newsletter?</span>
            </div>
            <button> submit </button>
        </form>
    `);
});

app.post("/register", (req, res) => {
    res.cookie("authenticated", true);
    const { firstname, lastname, age, subscribe } = req.body;
    if (subscribe) {
        res.send(`
            <h1>Thank you ${firstname} ${lastname} for registering for our newsletter</h1>
            <h2>You are ${age} years old apparently 🤷🏻‍♂️</h2>
        `);
    } else {
        res.send(`
            <h1>We are very sorry ${firstname}, that you didnt subscribe</h1>
            <h2>We will forgive you in maybe ${age} years....😢</h2>
        `);
    }
});

app.get("/private", (req, res) => {
    console.log("req.cookies: ", req.cookies);
    if (req.cookies.authenticated) {
        res.send(`
            <h1>TOP SECRET STUFF ✋ 🛑</h1>
            <h1>This is so secret and private</h1>
        `);
    } else {
        res.redirect("/");
    }
});

app.listen(8080, () => console.log("Server Listening.."));
