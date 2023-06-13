#!usr/bin/env node
//#sheband
//console.log("calculator");
// start project
// import all dependencies 1=inquirer 2=chalk 3=chak-animation
import chalkAnimation from "chalk-animation";
import inquirer from "inquirer";
let st_name = "badar ahmed sheikh";
const email = "badr_merchant@yahoo.com";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 9000);
    });
};
async function main() {
    let title = chalkAnimation.rainbow("calculate your calculation         Mr.Badar Ahmed Sheikh");
    await sleep();
    title.stop();
    console.log(`${st_name}
    _____________________
   |  _________________  |
   | | JO  3.141592654 | |
   | |_________________| |
   |  __ __ __ __ __ __  |
   | |__|__|__|__|__|__| |
   | |__|__|__|__|__|__| |
   | |__|__|__|__|__|__| |
   | |__|__|__|__|__|__| |
   | |__|__|__|__|__|__| |
   | |__|__|__|__|__|__| |
   |  ___ ___ ___   ___  |
   | | 7 | 8 | 9 | | + | |
   | |___|___|___| |___| |
   | | 4 | 5 | 6 | | - | |
   | |___|___|___| |___| |
   | | 1 | 2 | 3 | | x | |
   | |___|___|___| |___| |
   | | . | 0 | = | | / | |
   | |___|___|___| |___| |
   |_____________________|
   
   (Scientific Calculator)
   
   
    _____________________
   |  _________________  |
   | | JO           0. | |
   | |_________________| |
   |  ___ ___ ___   ___  |
   | | 7 | 8 | 9 | | + | |
   | |___|___|___| |___| |
   | | 4 | 5 | 6 | | - | |
   | |___|___|___| |___| |
   | | 1 | 2 | 3 | | x | |
   | |___|___|___| |___| |
   | | . | 0 | = | | / | |
   | |___|___|___| |___| |
   |_____________________|
   
   (Regular Calculator)
   
   ${email}`);
}
main();
async function question() {
    inquirer
        .prompt([
        /* Pass your questions in here */
        { type: "list",
            name: "operator",
            message: "which function u want to call  +,-,/,*",
            choices: ["+", "-", "/", "*"]
        }, { type: "number",
            name: "argumentOne",
            message: "Type first number "
        },
        { type: "number",
            name: "argumentTwo",
            message: "Type second number "
        },
        { type: "input",
            name: "age",
            message: "you have to give age" },
        { type: "password",
            name: "pass",
            message: "you have to give password" },
        { type: "input",
            name: "age1",
            message: "you have to give age1" }
    ])
        .then((answers) => {
        console.log("Age is", answers.age, answers.age1, answers.pass);
        // Use user feedback for... whatever in answers!!
        console.log("{}", answers.operator, answers.argumentOne, answers.argumentTwo);
        console.log("{}", `${answers.operator},${answers.argumentOne},${answers.argumentTwo}`);
        switch (answers.operator) {
            case "+":
                console.log("Age is", answers.age);
                console.log(`${answers.argumentOne}+${answers.argumentTwo}=`, answers.argumentOne + answers.argumentTwo);
                console.log("Answer is", answers.argumentOne + answers.argumentTwo);
                break;
            case "*":
                console.log(`${answers.argumentOne}*${answers.argumentTwo}=`, answers.argumentOne * answers.argumentTwo);
                console.log("Answer is", answers.argumentOne * answers.argumentTwo);
                break;
            case "-":
                console.log(`${answers.argumentOne}-${answers.argumentTwo}=`, answers.argumentOne - answers.argumentTwo);
                console.log("Answer is", answers.argumentOne + answers.argumentTwo);
                break;
            case "/":
                console.log(`${answers.argumentOne}/${answers.argumentTwo}=`, answers.argumentOne / answers.argumentTwo);
                console.log("Answer is", answers.argumentOne / answers.argumentTwo);
                break;
            default:
                console.log("No such task exists!");
                break;
        }
    })
        .catch((error) => {
        if (error.isTtyError) {
            console.log("error");
            // Prompt couldn't be rendered in the current environment
        }
        else {
            console.log("error2");
            // Something else went wrong
        }
    });
}
async function doAgain() { }
question();
