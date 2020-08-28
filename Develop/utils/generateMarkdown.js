// function to generate markdown for README
function generateMarkdown(data) {
  return (`
  # ${data.name}
  ## Description 
  ${data.desc}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  ---
  Your GitHub profile is an extremely important aspect of your public identity as a developer. A well-crafted one allows you to show off your work to other developers as well as potential employers. An important component of your GitHub profile—and one that many new developers often overlook—is the README.md file.

  The quality of a README often differentiates a good project from a bad project. A good one takes advantage of the opportunity to explain and showcase what your application does, justify the technologies used, and even talk about some of the challenges you faced and features you hope to implement in the future. A good README helps you stand out among the large crowd of developers putting their work on GitHub.

  There's no one right way to structure a good README. There is one very wrong way, however, and that is to not include a README at all or to   create a very anemic one. This guide outlines a few best practices. As you progress in your career, you will develop your own ideas about what makes a good README.

  At a minimum, your project README needs a title and a short description explaining the what, why, and how. What was your motivation? Why did you build this project? (Note: The answer is not "Because it was a homework assignment.") What problem does it solve? What did you learn? What makes your project stand out? If your project has a lot of features, consider adding a heading called "Features" and listing them here.
  ---
  ## Installation 
  blah blah
    ${data.install}
  ## Usage
  blah blah
  ${data.usage}
  
${renderLicense(data.license, data.github)}
  
`
  )
}

function renderLicense(license, github) {
return `[![License](https://img.shields.io/badge/license-${license}-blue.svg)](https://github.com/${github})`

}

module.exports = generateMarkdown;


