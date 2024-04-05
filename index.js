#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-10: ",
    },
]);
// if-else condition
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congtratulation! You guessed right number!");
}
else {
    console.log("You guess wrong number!");
}
