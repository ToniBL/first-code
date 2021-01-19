// const { response } = require("express");
const express = require("express");
const app = express();
const { getToken, getTweets, filterTweets } = require("./twitter"); // this gives iindex.js access to function in twitter.js file

app.use(express.static("./ticker"));

app.get("/data.json", (req, res) => {
    console.log("request for Data.json was made");
    getToken()
        .then((bearerToken) => {
            console.log("got Token", bearerToken);
            return Promise.all([
                getTweets(bearerToken, "FallonTonight"),
                getTweets(bearerToken, "dmyartists"),
                getTweets(bearerToken, "NewYorker"),
            ]);
        })
        .then((tweets) => {
            console.log("got Tweets:", tweets);
            const fallonTonight = tweets[0];
            const dmyartists = tweets[1];
            const newYorker = tweets[2];

            const allTweets = [...fallonTonight, ...dmyartists, ...newYorker];

            const sorted = allTweets.sort((a, b) => {
                return new Date(b.created_at) - new Date(a.created_at);
            });
            const finalTweets = filterTweets(allTweets);
            res.json(finalTweets);
        })
        .catch((err) => console.log("error along the way", err));
});

app.listen(8080, () => console.log("server listening"));
