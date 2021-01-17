// here goes the https request
// this is no express file! pure node!

const https = require("https");
const { twitterKey, twitterSecret } = require("./secrets");

module.exports.getToken = function (callback) {
    // requesting token from  twitter; asynch prozess ->  callback! before moving on
    const creds = `${twitterKey}:${twitterSecret}`;
    const encodedCreds = Buffer.from(creds).toString("base64");

    const config = {
        method: "POST",
        host: "api.twitter.com",
        path: "/oauth2/token",
        headers: {
            Authorization: `Basic ${encodedCreds}`,
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
    };
    // callback:
    function httpsRequestCallback(res) {
        if (res.statusCode !== 200) {
            callback(res.statusCode);
            return;
        }
        let body = "";
        res.on("data", (chunk) => (body += chunk));
        res.on("end", () => {
            const parsedBody = JSON.parse(body);
            callback(null, parsedBody.access_token);
        });
    }

    const req = https.request(config, httpsRequestCallback); // 2 arguments: req.obj and callback
    req.end("grant_type=client_credentials"); // body comes from the docs
};

module.exports.getTweets = function (bearerToken, callback) {
    const requestTweets = {
        method: "GET",
        host: "api.twitter.com",
        path:
            "/1.1/statuses/user_timeline.json?screen_name=FallonTonight&tweet_mode=extended",
        headers: {
            Authorization:
                "Bearer AAAAAAAAAAAAAAAAAAAAAOtRwgAAAAAAl12EvpH0yHfsewZLFx2cVZevGjc%3D1N6gfa6mL6MtLfX6hRFCxxNOuu2VbQllph2BEmCcP47WCLUv4d",
        },
        //${bearerToken} gives me undefined
    };

    function getTweetsCallback(res) {
        if (res.statusCode !== 200) {
            callback(res.statusCode);
            return;
        }
        let body = "";
        res.on("data", (chunk) => (body += chunk));
        res.on("end", () => {
            const tweets = JSON.parse(body);
            callback(null, tweets);
            // console.log("Tweets Body:", tweets);
        });
    }
    // once we have token, we can get tweets --> asynchronous!!
    // callback: first argument if there is an error, second argument tweets. this happens in index.js -> callback within callback
    // https request

    const req = https.request(requestTweets, getTweetsCallback);
    req.end();

    //console.log("tweets");
    // move on to filtering tweets and form them to array -> synchronous, no callback!
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

//  map, forEach or filter
// const TweetsWithUrl = tweets.filter((tweet, index) =>
//     console.log(
//         index,
//         "tweet_Full_text:",
//         tweet.full_text,
//         "entities_urls:",
//         tweet.entities.urls,
//         "entities_media:",
//         tweet.entities.media
//     )
// );
