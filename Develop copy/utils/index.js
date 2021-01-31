// TODO: Include packages needed for this application

const inquirer = require ('inquirer');

const fs = require('fs');

const path = require ('path');

const generateMarkdown = require('./generateMarkdown');

const questions = [
  
    {
      type: 'input',
      name: 'title',
      message: 'Write your project name?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Write short discription of your project',
      
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install dependencies?',    
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the repo?',    
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know about contributing to the repo?',    
    },
    {
        type: 'input',
        name: 'test',
        message: 'What command should be run to run tests?',    
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',  
        choices: ['MIT','APACHE 5.0', 'GPL 2.0', 'NIT 3', 'None']  
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub Username?',    
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address',    
    },
 
  ];
  // TODO: Create a function to write README file
    function writeToFile(fileName, data) {
        return fs.writeFileSync(path.join(process.cwd(),fileName),data);
    }
    
    function init(){
        inquirer.prompt(questions).then((inquirerResponses) => {
            console.log('Generating README ..');
            writeToFile('README.md', generateMarkdown({...inquirerResponses}));
        });
    }

  init();
