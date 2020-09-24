// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Badges

  ![license badge](https://img.shields.io/badge/license-${data.license}-brightgreen)

  ## Description
  
  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage 
  
  ${data.usage}
  
  ## Credits
  
  ${data.credits}

  ## License
  
  ${data.license}
  
  ## Contributing
  
  ${data.contributing}
  
  ## Tests
  
  ${data.tests}

  ## Questions
  
  __Find me on Git Hub:__ [${data.username}](https://github.com/${data.username} "Git Hub")
  
  __For questions or comments, email me at:__ ${data.email}
`;
}

module.exports = generateMarkdown;