// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  ## Installation
  Use \`${data.installation}\` to install the dependencies.
  ## Usage
  ${data.usage}
  ## License
  ![License Badge](https://img.shields.io/badge/license-${data.license}-blue)
  This project is covered by the ${data.license}. For more information on available licenses, visit [https://choosealicense.com/](https://choosealicense.com/).
  ## Contributing
  ${data.contributors}
  https://github.com/firstcontributions/first-contributions
  ## Tests
  Use \`${data.test}\` to test the application.
  ## Questions?
  https://github.com/${data.name}
  
  ${data.email}
`;
}

module.exports = generateMarkdown;
