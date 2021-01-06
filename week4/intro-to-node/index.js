console.log("this is my first node");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const story = {
    q: "Welcome to The Land Of Wizards! Would you like to play?",
    answers: {
        yes: {
            q:
                "You are alone in a dark forest and facing a fork in the road. Which direction do you turn?",
            answers: {
                left: {
                    q:
                        "There's a scary wizard! He asks you a tough question. What's 1+1?",
                    answers: {
                        2: "congratulations!",
                    },
                },
                right: "This was not the right choice. Goodbye!",
            },
        },
        no: "Alright then. Enjoy your day!",
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
                console.log(obj.answers[answer]); //if the answer the user types corresponds to a string
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
