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
    type: "confirm",
    message: "Would you like to include the contributors covenant?",
    name: "contributor"
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

// function to write README file
//function writeToFile(fileName, data) {
  //const fileName = "README.md";
  //fs.writeFile(fileName, data);
//}

// function to initialize program
function init() {

}

// function call to initialize program
init();

//require inquirer
var inquirer = require("inquirer");

inquirer
  .prompt(questions)
  .then(function (data) {

    //writeToFile();
    if (err) {
      return console.log(err);
    }
    console.log("Success!");
  });