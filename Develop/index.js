const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
let readme = 'readme.txt';

const questions = [
  {
    type: 'input',
    name: 'username',
    message: 'What is your GitHub username?',
    validate: (answer) => {
      if (answer === '') {
        return console.error('wow really?');
      } else {
        return true;
      }
    },
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email?',
    //validate:
  },
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
    message: 'Provide a description for your project',
    default: 'description tbd',
    //validate:
  },
  {
    type: 'input',
    name: 'installation',
    message: 'List the steps required to install your application',
    default: 'installation process tbd',
    //validate:
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How is your app used? Provide instructions',
    default: 'Usage instructions tbd',
    //validate:
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license',
    choices: ['MIT', 'GNU GPLv3', 'Apache 2.0', 'ISC'],
    //validate:
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'How can others contribute to your project?',
    //validate:
  },
  {
    type: 'input',
    name: 'tests',
    message:
      'If applicable, describe tests you have run on this project so far',
    //validate:
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      console.log(answers);
    })
    .catch((error) => {
      if (error.isTtyError) {
        console.error('error!');
      } else {
        console.error(error.message);
      }
    });
}
init();
