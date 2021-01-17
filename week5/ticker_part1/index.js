const { response } = require("express");
const express = require("express");
const app = express();
const { getToken, getTweets, filterTweets } = require("./twitter"); // this gives iindex.js access to function in twitter.js file

app.use(express.static("./ticker"));

app.get("/data.json", () => {
    console.log("request for Data.json was made");
    getToken((err, bearerToken) => {
        if (err) {
            console.log("err getting bearer token", err);
            return;
        }
        console.log("bearerToken:", bearerToken);
        // 2. get the tweets from twitter using bearerToken
        getTweets(bearerToken, (err, tweets) => {
            if (err) {
                console.log("err getting tweets:", err);
                return;
            }
            // console.log("tweets:", tweets);
            //filter & sort tweets
            const tickerOutput = filterTweets(tweets);
            response.json(tickerOutput);
        });
    });
});

app.listen(8080, () => console.log("server listening"));
