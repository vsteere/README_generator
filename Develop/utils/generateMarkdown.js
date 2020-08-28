// function to generate markdown for README
function generateMarkdown(data) {
  return (`
  # ${data.name}
  ## Description 
  ${data.desc}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  ## Installation 
  blah blah
    ${data.install}
  ## Usage
  blah blah
  ${data.usage}
  

  
`
  )
}

module.exports = generateMarkdown;
