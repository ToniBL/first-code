// here goes the https request
// this is no express file! pure node!
const fs = require("fs");
const https = require("https");

const { twitterKey, twitterSecret } = require("./secrets");
//const { resolve } = require("path");

module.exports.getToken = function () {
    return new Promise((resolve, reject) => {
        const creds = `${twitterKey}:${twitterSecret}`;
        const encodedCreds = Buffer.from(creds).toString("base64");

        const config = {
            method: "POST",
            host: "api.twitter.com",
            path: "/oauth2/token",
            headers: {
                Authorization: `Basic ${encodedCreds}`,
                "Content-Type":
                    "application/x-www-form-urlencoded;charset=UTF-8",
            },
        };
        // former callback Function, now resolve & reject:
        function httpsRequestCallback(res) {
            if (res.statusCode !== 200) {
                reject(res.statusCode);
                // return;
            }
            let body = "";
            res.on("data", (chunk) => (body += chunk));
            res.on("end", () => {
                const parsedBody = JSON.parse(body);
                resolve(parsedBody.access_token);
            });
        }

        const req = https.request(config, httpsRequestCallback); // 2 arguments: req.obj and callback
        req.end("grant_type=client_credentials"); // body comes from the docs
    });
};

module.exports.getTweets = function (bearerToken, tweetSource) {
    return new Promise((resolve, reject) => {
        const requestTweets = {
            method: "GET",
            host: "api.twitter.com",
            path: `/1.1/statuses/user_timeline.json?screen_name=${tweetSource}&tweet_mode=extended`,
            headers: {
                Authorization: `Bearer ${bearerToken}`,
            },
        };

        function getTweetsCallback(res) {
            if (res.statusCode !== 200) {
                reject(res.statusCode);
                // return;
            }

            let body = "";
            res.on("data", (chunk) => (body += chunk));
            res.on("end", () => {
                const tweets = JSON.parse(body);
                resolve(tweets);
                //  callback(null, tweets);
                // console.log("Tweets Body:", tweets);
            });
        }
        const req = https.request(requestTweets, getTweetsCallback);
        req.end();

        //console.log("tweets");
        // move on to filtering tweets and form them to array -> synchronous, no callback!
    });
};

module.exports.filterTweets = function (tweets) {
    let tweetToPublish = [];
    for (let i = 0; i < tweets.length; i++) {
        let tweetTexts = tweets[i].full_text;
        let url = tweets[i].entities.urls;
        let media = tweets[i].entities.media;

        // console.log("tweetTexts:", tweetTexts);
        //console.log("url:", url);
        //console.log("media:", media);

        if (tweets[i].entities.urls.length == 1) {
            //console.log(tweets[i].full_text);
            //console.log(tweets[i].entities.urls[0].url);
            let splitTweet = tweets[i].full_text.split("https");
            // console.log("splitTweet:", splitTweet);
            let finalTweetText = splitTweet[0];
            //console.log(finalTweetText);

            tweetToPublish.push({
                text: finalTweetText,
                url: tweets[i].entities.urls[0].url,
            });
            console.log(tweetToPublish);
        }
    }
    return tweetToPublish;
};
