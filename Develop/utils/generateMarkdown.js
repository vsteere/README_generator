// function to generate markdown for README
function generateMarkdown(data) {
  return (`
  # ${data.name}
  ## Description 
  ${data.desc}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  ---
  
  ---
  ## Installation 
  
  ${data.install}

  ---
  ## Usage
  
  ${data.usage}

  ---

  ## License
  [![License](https://img.shields.io/badge/license-${data.license}-blue.svg)](https://opensource.org/licenses/${data.license})
  #### This application is created under the auspices of the ${data.license} license.
  ---
  
  ## Contributing
  ${data.contrib}

  ---

  ## Tests
   \`\`\`
  ${data.test}
  \`\`\`

  ---

  ## Questions
  I can be reached at the following email address: ${data.email}
  
  My GitHub profile link is: <https://www.github.com/${data.github}>
`
  )
}

function renderLicense(license, github) {
return `[![License](https://img.shields.io/badge/license-${license}-blue.svg)](https://github.com/${github})`

}

module.exports = generateMarkdown;


