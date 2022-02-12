// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        name:"readmeTitle",
        type: "input",
        message: "what is the name of the readme?",
    },
    {
        type: "input",
        name: "description",
        message: "please type a brief description of your project."
    },
    {
        type: "input",
        name: "motivation",
        message: "What was your motivation to make this?"
    },
    {
        type: "input",
        name: "theBigWhy",
        message: "Why did you build this?"
    },
    {
        type: "input",
        name: "problemSolving",
        message: "What problems does this project solve?"
    },
    {
        type: "input",
        name: "learningCurve",
        message: "What problems did you encounter and how did you overcome them?"
    },
    {
        type: "input",
        name: "contentTable",
        message: "Please enter a table of contents."
        /* make this a optional question */
    },
    {
        type: "input",
        name: "installInstructions",
        message: "Please type a brief instruction on how to install the project."
    },
    {
        type: "input",
        name: "usage",
        message: "Please profive a brief instruction for how to use the project."
        /* include ability to add screenshots? */
    },
    {
        type: "input",
        name: "credits",
        message: "Please provide a brief list of your collaborators or teammembers. Also list any outside source help."
    },
    {
        type: "input",
        name: "license",
        message: "choose a license."
        /* look at what licences should be available. make this question multiple choice */
    },
    {
        type: "input",
        name: "credits",
        message: "Please provide a brief list of your collaborators or teammembers. Also list any outside source help."
    },
    {
        type: "input",
        name: "badges",
        message: "Insert multiple choice badges"
    },
    {
        type: "input",
        name: "features",
        message: "list the features of your project."
    },
    {
        type: "input",
        name: "contributionCapability",
        message: "List the ways other developers could contribute to your project."
    },
    {
        type: "input",
        name: "futureTests",
        message: "Provide a brief list of how others can test the project."
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    /* create the readme file setup using the #, ##, ### methods */
}

// TODO: Create a function to initialize app
function init() {
/* use prompt.then style code
catch errors and keep data inputed */
}

// Function call to initialize app
init();
