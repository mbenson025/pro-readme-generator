// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge() {
  // if (answers.license === MIT) {
  //   `![license-badge](https://img.shields.io/badge/license-MIT-blue)`;
  // }
  // if (answers.license === Apache) {
  //   `![license-badge](https://img.shields.io/badge/license-Apache--2.0-green)`;
  // }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

function generateMarkdown(answers) {
  renderLicenseLink();
  return `# ${answers.title} 
  ![license-badge](https://img.shields.io/badge/license-${answers.license}-blue);

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
  ${answers.license} License

  Copyright (c) 2022 ${answers.username}

  Licensed under the [${answers.license}](LICENSE) license.

  ## Contact
 * GitHub Profile - https://github.com/${answers.username}
 * Email - ${answers.email}
  

`;
}

module.exports = generateMarkdown;
