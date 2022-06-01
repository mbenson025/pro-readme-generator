// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    licenseLink = `[MIT](https://opensource.org/licenses/MIT)`;
  }
  if (license === 'GPLv3') {
    licenseLink = `[GPLv3](https://www.gnu.org/licenses/gpl-3.0.en.html)`;
  }
  if (license === 'Apache-2.0') {
    licenseLink = `[Apache-2.0](https://opensource.org/licenses/Apache-2.0)`;
  }
  if (license === 'ISC') {
    licenseLink = `[ISC](https://opensource.org/licenses/ISC)`;
  }
}

function generateMarkdown(answers) {
  renderLicenseLink(answers.license);
  console.log(licenseLink);
  return `# ${answers.title} 
  ![license-badge](https://img.shields.io/badge/license-${answers.license}-blue)

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

  Licensed under the ${licenseLink} License.

  ## Contact
 * GitHub Profile - https://github.com/${answers.username}
 * Email - ${answers.email}
  

`;
}

module.exports = generateMarkdown;