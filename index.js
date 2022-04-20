// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your Project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Please enter your Github username',
        name: 'github'
    },
    {
        type: 'input',
        message: 'Please enter your email address',
        name: 'email'
    },
    {
        type: 'input',
        message: 'Write a description of your project',
        name: 'description'
    },
    {
        type: 'input',
        message: 'What are the installation instructions of your project',
        name: 'install'
    },
    {
        type: 'input',
        message: 'Describe how you use your app',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'What are some contribution instructions you have for other devs',
        name: 'contribute'
    },
    {
        type: 'input',
        message: 'Any commands needed to be known for testing?',
        name: 'test'
    },
    {
        type: 'list',
        message: 'What license do you want to use?',
        name: 'license',
        choices: ['MIT License', 'Apache 2.0', 'GPL 3.0', 'None'] 
    }
];

// TODO: Create a function to write README file
function writeToFile(filename, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(data => {
        console.log(data)
        fs.writeFile('generated/generatedREADME.md', generateMarkdown(data), err => {
            if (err) {
                console.log(err)
            }

            console.log("Great Success, ReadME has been generated")
        })
    });
}

// Function call to initialize app
init();
