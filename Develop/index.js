//check browser if nodemon is running---------
const fs = require('fs');
const inquirer = require('inquirer');

const questions = [
  //objects-- question-type:input(or choices?), name: string, message: 'question here'
  //inquirer npm- "Take type, name, message[, default, filter, validate, transformer] properties."
  {
    type: 'input',
    name: 'title',
    message: 'What is your project title?',
    default: 'title123',
    //validate:
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a description for your project.',
    default: 'description tbd',
    //validate:
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
