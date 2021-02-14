// array of questions for user
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
  {
    type: "input",
    name: "github",
    message: "What is your github?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?",
  },
  {
    type: "input",
    name: "title",
    message: "What is the project's name?",
  },
  {
    type: "input",
    name: "description",
    message: "What is the description of your project?",
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
    type: "list",
    name: "license",
    message: "What license does your project have?",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
  },
  {
    type: "input",
    name: "contributing",
    message: "What does the user need to know before contributing?",
  },
  {
    type: "input",
    name: "tests",
    message: "How do you run a test?",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
  inquirer.prompt(questions)
  .then((inquirerResponses) => {
    console.log("Generating README...");
    writeToFile("README.md", generateMarkdown({...inquirerResponses}));
  })
}

// function call to initialize program
init();
