// TODO: Include packages needed for this application



const inquirer = require('inquirer');
const fs = require('fs');
const fileContent = " README Generator";
const filepath = "hw7Readme.md";

// TODO: Create an array of questions for user input
//const questions = [];

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app


inquirer
  .prompt([
    {
      type: 'input',
      name: 'projectTitle',
      message: 'Enter your project title',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Write a brief description of your project',
     
    },
    {
      type: 'list',
      message: 'What is your preferred method of communication?',
      name: 'contact',
      choices: ['email', 'phone', 'telekinesis'],
    },
  ])



  fs.writeFile(filepath, fileContent, (err) => {
    if (err) throw err;
    console.log("The file was succesfully saved!");



  });
