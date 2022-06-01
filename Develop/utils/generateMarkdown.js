// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title} 
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing-Guidelines](#contributing-guidelines)
  - [Tests](#tests)
  - [License](#license)
  - [Contact](#contact)

  ## Description
  ${answers.description}

  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ## Contributing Guidelines
  ${answers.contributing}

  ## Tests
  ${answers.tests}

  ## License
  ${answers.license}

  ## Contact
  GitHub Profile - https://github.com/${answers.username}
  Email - ${answers.email}
  

`;
}

module.exports = generateMarkdown;
