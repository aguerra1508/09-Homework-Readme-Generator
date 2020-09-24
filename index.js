//require inquirer
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown.js");

// array of questions for user
const questions = [{
    type: "input",
    message: "What is your project title?",
    name: "title"
  },
  {
    type: "input",
    message: "Enter a description for your project.",
    name: "description"
  },
  {
    type: "input",
    message: "Enter installation requirements for your project.",
    name: "installation"
  },
  {
    type: "input",
    message: "Enter how your project should be used.",
    name: "usage"
  },
  {
    type: "input",
    message: "Enter any collaborators, third party assets or other links.",
    name: "credits"
  },
  {
    type: "input",
    message: "Do you have any contributing guidelines?",
    name: "contributing"
  },
  {
    type: "input",
    message: "Enter any tests on how to use your project.",
    name: "tests"
  },
  {
    type: "checkbox",
    name: "license",
    message: "Choose a license.",
    choices: [
      "GNU AGPLv3",
      "GNU GPLv3",
      "GNU LGPLv3",
      "Mozilla Public License 2.0",
      "Apache License 2.0",
      "MIT License",
      "Boost Software License 1.0",
      "The Unlicense"
    ]
  },
  {
    type: "input",
    message: "What is your Git Hub user name?",
    name: "username"
  },
  {
    type: "email",
    message: "What is your email",
    name: "email"
  },
];

// function to initialize program
async function init() {
  try {
    const data = await inquirer
      .prompt(questions)
    const readme = await generateMarkdown(data);
    await fs.writeFileSync("README.md", readme);
    console.log("You've successfully generated your README.md");
  } catch (error) {
    console.error(error);
  }
}
init();