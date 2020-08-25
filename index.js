const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");
// array of questions for user

const validateAnswer = async (input) => {
    if (!input) {
        return "Response required.";
    }
    return true;
};

inquirer.prompt([
    {
    type: "input",
    message: "What is your Github profile name?",
    name: "name",
    validate: validateAnswer
    },
    {
    type: "input",
    message: "What is your email address?",
    name: "email",
    validate: validateAnswer
    },
    {
    type: "input",
    message: "What is the title of your application?",
    name: "title",
    validate: validateAnswer
    }, 
    {
    type:"input",
    message: "What is the description of your application?",
    name: "description",
    validate: validateAnswer
    }, 
    { 
    type:"input",
    message: "Are any installations needed to run your application?",
    name: "installation",
    validate: validateAnswer
    },
    {
    type:"input",
    message: "What is your applications intended usage?",
    name: "usage",
    validate: validateAnswer  
    },
    {
      type: "list",
      message: "Which license protects this project?",
      name: "license",
      choices: [
        "Apache",
        "Boost",
        "Eclipse",
        "GNU",
        "IBM",
        "MIT",
        "Mozilla",
        "Unlicensed"
      ],
      validate: validateAnswer
    }, 
    {
    type:"input",
    message: "Who contributed to this application?",
    name: "contributors",
    validate: validateAnswer  
    },
    {
    type:"input",
    message: "What tests did you use for this application?",
    name: "tests",
    validate: validateAnswer
    }
])
//user feedback//
.then(data => {

    fs.writeFile("README.md", generateMarkdown(data), function (err) {
      if (err) {
        console.log(err);
      }
    })
  
  });
