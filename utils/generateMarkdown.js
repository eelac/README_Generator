// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Description
${data.description}

## Table of Contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [License](#license)
  4. [Contributing](#contributing)
  5. [Tests](#tests)
  6. [Questions](#questions)

## Installation
  1. To install the necessary npm's, run the following command: ${data.installation}

## Usage
  1. ${data.usage}

## License
  1. This project is licensed under the ${data.license} license.

## Contributing
  1. ${data.contributing}

## Tests
  1. To run tests, run: ${data.tests}

## Questions
  If you have any questions about the repo, contact me at ${data.email}.
  You can find my work at [${data.github}](https://github.com/${data.github}/).
`;
}

module.exports = generateMarkdown;
