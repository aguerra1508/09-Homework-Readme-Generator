var inquirer = require("inquirer");

    inquirer
      .prompt([
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
      ])
      .then(function(response) {
    
        if (response.confirm === response.password) {
          console.log("Success!");
        }
        else {
          console.log("You forgot your password already?!");
        }
      });


// array of questions for user
//const questions = [
    
//];

// function to write README file
//function writeToFile(fileName, data) {
//}

// function to initialize program
//function init() {

//}

// function call to initialize program
//init();
