// if (req.cookies.eatThis) on every route --> move to middleware
// redirect from cookie accept to original urls still needs to be done
// about route needs fixing

const express = require("express");
const app = express();
//console.dir(app);
const cookieParser = require("cookie-parser");
let cookieUrl;
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());
app.use((req, res, next) => {
    if (req.cookies.eatThis || req.url == "/cookies") {
        next();
    } else {
        res.redirect("/cookie");
        cookieUrl = res.cookie("reqUrl", req.url);
        console.log("req.cookie in middleware:", eatThis);
    }
});

// check for cookie or cookie url -> if no cookie send to url if cookie url send to cookie urls
// else
// check for url , if no /cookie save req.url in cookie and send to cookie in else just exit middleware )

app.use(express.static("./projects"));

app.get("/cookie", (req, res) => {
    res.send(`<h2> Hello from the kitchen </h2>
    <form method="POST">
    <p> we are about to serve you some cookies 🍪. Eat or leave!</p>
    <div>
                <input type="checkbox" name="subscribe"><span> Give me that cookies! </span>
            </div>
            <button> submit </button>
        </form>
    `);
});

app.post("/cookie", (req, res) => {
    const { subscribe } = req.body;
    if (subscribe) {
        res.cookie("eatThis", true);
        res.redirect(cookieUrl);
        //console.log("req.cookies subscribe:", req.cookies);
    } else {
        res.send(`<h2> No cookies no surfing. </h2>`);
        console.log("req.cookies don't subscribe:", req.cookies);
    }
});

app.get("/", (req, res) => {
    // if (req.cookies.eatThis) {
    res.send("<h1> I am a page <h1>");
    // } else {
    //     res.redirect("/cookie");
    // }
});

app.get("/about", (req, res) => {
    //  if (req.cookies.eatThis) {
    res.sendFile(__dirname + "/index.html");
    // } else {
    //     res.redirect("/cookie");
    // }
});

app.get("/register", (req, res) => {
    //   if (req.cookies.eatThis) {
    res.send(`<h2>Please tell us about yourself</h2>
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
        </form>`);
    // } else {
    //     res.redirect("/cookie");
    // }
});

app.post("/register", (req, res) => {
    console.log("post made to register");
    console.log("req.body:", req.body);
    const { firstname, lastname, age, subscribe } = req.body;
    if (subscribe) {
        res.send(`<h1>Thank you ${firstname} ${lastname} for registering`);
    } else {
        res.send(`why did you not register ${firstname}?!`);
    }
});

app.listen(8080, () => console.log("Server Listening"));
