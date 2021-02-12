// array of questions for user
const fs = require("fs");
const inquirer = require("inquirer");
const questions = [
  {
    type: "input",
    name: "project",
    message: "What is the project's name?",
  },
  {
    type: "input",
    name: "description",
    message: "What is the description of your project?",
  },
  {
    type: "list",
    name: "license",
    message: "What license does your project have?",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
  },
  {
    type: "input",
    name: "installation",
    message: "What is the command to download npm files?",
  },
  {
    type: "input",
    name: "usage",
    message: "What does the user need to know about this repo?",
  },
  {
    type: "input",
    name: "contributing",
    message: "What does the user need to know before contributing?",
  },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(README.md, data)
}

// function to initialize program
function init() {}

// function call to initialize program
init();
