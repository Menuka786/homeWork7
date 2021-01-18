// TODO: Include packages needed for this application



const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input


inquirer
  .prompt([

    //Project Title 
    {
      type: 'input',
      name: 'ProjectTitle',
      message: 'Enter your project title',
    },

    //Read me Description
    {
      type: 'input',
      name: 'Description',
      message: 'Write a brief description of your project',
     
    },
    //Installation instruction 
    {
      type: 'input',
      
      name: 'Installation Instruction ',
      message: 'Type in your installation instruction?',
    
    },
    // Usage information 
    {
      type: 'input',
      
      name: 'Usage ',
      message: 'Please write usage information ',
    
    },

    //Input
    {
      type: 'input',
      
      name: 'Contribution Guidelines ',
      message: 'Please write Contribution Guidelines ',
    
    },
    {
      type: 'input',
      
      name: 'Test instruction  ',
      message: 'Are there any test instruction ? ',
    
    },
    {
      type: 'input',
      name: 'Application License  ',
      message: 'Choose your Licence ',
      choices :['License 1', 'License 2','License 3']
    
    },
    {
type:"input",
name :"questions",
message: "Enter your github username.",

    },
    
    {
    
    type : "input",
    name: "LinkedIn",
    message: 'Enter your LinedIn URL.',


    },
    
    {
    type : "input",
    name: "Email",
    message: 'Enter your Email Address',


    },

  ])
  .then((data) => {

    
    
    fs.writeFile("HWREADME.md", generateMarkdown(data));
 
console.log ("success");


  });
