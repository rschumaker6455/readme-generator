const fs = require('fs');
const inquirer = require('inquirer');
// array of questions for user

inquirer.prompt([
    {
    type: "input",
    message: "What is the title of your application?",
    name: "Title"
    }, 
    {
    type:"input",
    message: "What is the description of your application?",
    name: "Description"
    }, 
    {
    type:"input",
    message: "Include Table of Contents Here.",
    name: "Table of Contents"
    }, 
    {
    type:"input",
    message: "Are any installations needed to run your application?",
    name: "Installation"
    },
    {
    type:"input",
    message: "What is your applications intended usage?",
    name: "Usage"  
    },
    {
    type:"input",
    message: "Do have a license for this application?",
    name: "License"   
    }, 
    {
    type:"input",
    message: "Who contributed to this application?",
    name: "Contributors"   
    },
    {
    type:"input",
    message: "What tests did you use for this application?",
    name: "Tests" 
    }
])
//user feedback//
.then(answers => { 
    fs.writeFile("README.md", 
    `name.Title  
    answers.Description 
    answers.Table of Contents
    answers.Installation
    answers.Usage
    answers.License
    answers.Contributors
    answers.Tests`,
    function(err) {
        if (err) return console.log(err);
    })
})
.catch(error => {
    if(error.isTtyError) {
    console.log("Prompt couldn't be rendered in the current environment.")
    } else {
       console.log("Something went wrong.")
    }  
});

// function to initialize program
function init() {

}

// function call to initialize program
init();
