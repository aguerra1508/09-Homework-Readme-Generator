// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  
  ${data.description}

  ## Table of Contents
  
  [Installation](#installation)
  [Usage](#usage)
  [Credits](#credits)
  [License](#license)
  [Contributing](#contributing)
  [Tests](#tests)
  [Questions](#questions)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage 
  
  ${data.usage}
  
  ## Credits
  
  ${data.credits}

  ## License
  
  ${data.license}
  
  ## Badges
  
  
  ## Contributing
  
  ${data.contributing}
  
  ## Tests
  
  ${data.tests}

  ## Questions

  ${data.username}
  
  ${data.email}
`;
}

module.exports = generateMarkdown;