const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generate = require("./utils/generateMarkdown")


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
//this was put together with the help of the tutor
function write(file, data) {
    return fs.writeFileSync(path.join(process.cwd(), file), data)




}
function start() {
inquirer
    .prompt([
        {
            name: "name",
            type: "input",
            message: questions[0]
        },
        {
            name: "desc",
            type: "input",
            message: questions[1]
        },
        {
            name: "install",
            type: "input",
            message: questions[2]
        },
        {
            name: "usage",
            type: "input",
            message: questions[3]
        },
        {
            name: "contrib",
            type: "input",
            message: questions[4]
        },
        {
            name: "test",
            type: "input",
            message: questions[5]
        },

        {
            name: "license",
            type: "list",
            message: questions[6],
            //types of licenses from article provided by TA
            choices: ["MIT", "Apache", "GPL", "no license"]
        },

        {
            name: "github",
            type: "input",
            message: questions[7],

        },
        {
            name: "email",
            type: "input",
            message: questions[8],

        },
    ])

    .then(function (response) {
//checking to see if the inquirer stored data correctly
        console.log(response.name)
        console.log(response)
       
        write("readme.md", generate({...response}));


    })

}





start();