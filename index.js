// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateReadme = require('./src/readme-template');

// TODO: Create an array of questions for user input
const questions = () => {
    console.log(` ADDING NEW README NOW `);

    // if (!questionData) {
    //     questionData.newReadme = []
    // }
    return inquirer.prompt([
        {
            name: "readmeTitle",
            type: "input",
            message: "what is the name of the readme? (Required)",
            validate: readmeTitleInput => {
                if (readmeTitleInput) {
                    return true;
                } else {
                    console.log('You need to enter a readme name!');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "description",
            message: "please type a brief description of your project. (Required)",
            validate: readmeTitleInput => {
                if (readmeTitleInput) {
                    return true;
                } else {
                    console.log('You need to enter a readme name!');
                    return false;
                }
            }
        },
        {       /* begin bullet point for description */
            type: "input",
            name: "motivation",
            message: "What was your motivation to make this? (Required)",
            validate: readmeTitleInput => {
                if (readmeTitleInput) {
                    return true;
                } else {
                    console.log('You need to enter a readme name!');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "theBigWhy",
            message: "Why did you build this? (Required)",
            validate: readmeTitleInput => {
                if (readmeTitleInput) {
                    return true;
                } else {
                    console.log('You need to enter a readme name!');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "problemSolving",
            message: "What problems does this project solve? (Required)",
            validate: readmeTitleInput => {
                if (readmeTitleInput) {
                    return true;
                } else {
                    console.log('You need to enter a readme name!');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "learningCurve",
            message: "What problems did you encounter and how did you overcome them? (Required)",
            validate: readmeTitleInput => {
                if (readmeTitleInput) {
                    return true;
                } else {
                    console.log('You need to enter a readme name!');
                    return false;
                }
            }
        } /* end bullet points for description */,
        {
            type: "input",
            name: "contentTable",
            message: "Please enter a table of contents. (Required)",
            validate: readmeTitleInput => {
                if (readmeTitleInput) {
                    return true;
                } else {
                    console.log('You need to enter a readme name!');
                    return false;
                }

                /* make this a optional question / use confirm to determine if this is wanted? */
            }
        },
        {
            type: "input",
            name: "installInstructions",
            message: "Please type a brief instruction on how to install the project. (Required)",
            validate: readmeTitleInput => {
                if (readmeTitleInput) {
                    return true;
                } else {
                    console.log('You need to enter a readme name!');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "usage",
            message: "Please profive a brief instruction for how to use the project. (Required)",
            validate: readmeTitleInput => {
                if (readmeTitleInput) {
                    return true;
                } else {
                    console.log('You need to enter a readme name!');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "credits",
            message: "Please provide a brief list of your collaborators or teammembers. Also list any outside source help. (Required)",
            validate: readmeTitleInput => {
                if (readmeTitleInput) {
                    return true;
                } else {
                    console.log('You need to enter a readme name!');
                    return false;
                }
                /* add a confirm to determine if this is wanted? */
            }
        },
        {
            type: "list",
            name: "license",
            message: "choose a license. (Required)",
            choices: ["MIT", "Eclipse"]
        },
        {
            type: "list",
            name: "features",
            message: "list the features of your project. (Required)",
            choices: ["HTML", "CSS", "JS", "Node", "ES6", "Bootstrap", "JQuery"],
            validate: readmeTitleInput => {
                if (readmeTitleInput) {
                    return true;
                } else {
                    console.log('You need to enter a readme name!');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "contributionCapability",
            message: "List the ways other developers could contribute to your project. (Required)",
            validate: readmeTitleInput => {
                if (readmeTitleInput) {
                    return true;
                } else {
                    console.log('You need to enter a readme name!');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "futureTests",
            message: "Provide a brief list of how others can test the project. (Required)",
            validate: readmeTitleInput => {
                if (readmeTitleInput) {
                    return true;
                } else {
                    console.log('You need to enter a readme name!');
                    return false;
                }
            }
        },
    ])
};

// TODO: Create a function to write README file
function writeToFile(readmeFile) {
    fs.writeFile("./dist/README.md", readmeFile, (err) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('readme created!')
    });
};

questions().then(answers => {
    console.log(answers)
    const newReadmeTemplate = generateReadme(answers)
    console.log(newReadmeTemplate)
    writeToFile(newReadmeTemplate)
});