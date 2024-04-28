#! /usr/bin/env node
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence count the word:"
    }
]);
const word = answers.Sentence.trim().split(" ");
// print array  word to the console
console.log(word);
// print and count  words in sentence
console.log(`Your sentence word count is ${word.length}`);
