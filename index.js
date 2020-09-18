// array of questions for user
const questions = [
  {
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
    message: "Would you like to include the contributors covenant?",
    name: "contributor"
  },
  {
    type: "input",
    message: "Enter any tests on how to use your project.",
    name: "tests"
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

var inquirer = require("inquirer");

    inquirer
      .prompt(questions)
  .then(answers => {
    // Use user feedback for... whatever!!
  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
