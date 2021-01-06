//console.log("this is my first node");
const chalk = require("chalk");
//console.log(chalk.blue("Hello world!"));

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const story = {
    q:
        "You are freezing your ass off in the Berghain que since 2 hours. Do you dare to skip the line and sneak in infront? ",
    answers: {
        yes: {
            q:
                "This saved you another hour of queing but gave you minus 100 karma-points. And you still haven't entered the temple of techno. Can you play it cool and hold the bouncers stare? ",
            answers: {
                yes: {
                    q:
                        "You made it inside! Now you have to choose wheater to go left or straight.",
                    answers: {
                        straight:
                            "Oh no, you found yourself in the never ending cue for the loo!",
                        left:
                            "Oh no, you got lost in the darkrooms. Good luck my friend",
                    },
                },
                no: "Sven smells your fear and says: 'Heute leider nicht'",
            },
        },
        no:
            "Too bad. After another two hours you reach the door only to hear that it's 'Einlassstop'. Try again next week.",
    },
};

engine(story);

function engine(obj) {
    rl.question(obj.q, (answer) => {
        if (!obj.answers[answer]) {
            // there is no matching property
            // that means the user typed an invalid answer
            console.log("You are not cooperating!");
            engine(obj);
        } else {
            if (typeof obj.answers[answer] == "string") {
                console.log(chalk.bgRed(obj.answers[answer])); //if the answer the user types corresponds to a string
                // log the string
                // end the game
                rl.close();
            } else if (typeof obj.answers[answer] == "object") {
                // console.log(answer);
                engine(obj.answers[answer]);

                // the answer the user types corresponds to an object
                // continue the game
                // ask the next question
            }
        }
    });
}
