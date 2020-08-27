var inquirer = require("inquirer");

// array of questions for user
const questions = [
    "What is the title of your project?",
    "Please enter a brief description of your project",
    "Please enter installation instructions for the application",
    "Please enter usage information",
    "Please enter contribution guidelines for project",
    "Please add test instructions",
  "Please choose a license from the list",
    "Please enter your GitHub username",
    "Please enter your preferred email address"

];

inquirer
    .prompt([
        {
            name: "project_name",
            type: "input",
            message: questions[0]
        },
        {
            name: "project_desc",
            type: "input",
            message: questions[1]
        },
        {
            name: "project_install",
            type: "input",
            message: questions[2]
        },
        {
            name: "project_usage",
            type: "input",
            message: questions[3]
        },
        {
            name: "project_contrib",
            type: "input",
            message: questions[4]
        },
        {
            name: "project_test",
            type: "input",
            message: questions[5]
        },

        {
            name: "project_license",
            type: "list",
            message: questions[6],
           //types of licenses from article provided by TA
            choices: ["MIT license", "Apache license", "GPL license", "no license"]
        },

        {
        name: "project_github",
            type: "input",
            message: questions[7],
           
        },
        {
            name: "project_email",
                type: "input",
                message: questions[8],
               
            },
    ])




// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
