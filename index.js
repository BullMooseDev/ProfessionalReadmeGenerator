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
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('You need to enter a description!');
                    return false;
                }
            }
        },
        {       /* begin bullet point for description */
            type: "input",
            name: "motivation",
            message: "What was your motivation to make this? (Required)",
            validate: motivation => {
                if (motivation) {
                    return true;
                } else {
                    console.log('You need to enter your motivation!');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "theBigWhy",
            message: "Why did you build this? (Required)",
            validate: theBigWhy => {
                if (theBigWhy) {
                    return true;
                } else {
                    console.log('You need to enter why you built this!');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "problemSolving",
            message: "What problems does this project solve? (Required)",
            validate: problemSolving => {
                if (problemSolving) {
                    return true;
                } else {
                    console.log('You need to enter the problems solved!');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "learningCurve",
            message: "What problems did you encounter and how did you overcome them? (Required)",
            validate: learningCurve => {
                if (learningCurve) {
                    return true;
                } else {
                    console.log('You need to enter the problems you encountered!');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "installInstructions",
            message: "Please type a brief instruction on how to install the project. (Required)",
            validate: installInstructions => {
                if (installInstructions) {
                    return true;
                } else {
                    console.log('You need to enter some install instructions!');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "usage",
            message: "Please profive a brief instruction for how to use the project. (Required)",
            validate: usage => {
                if (usage) {
                    return true;
                } else {
                    console.log('You need to enter some usage instructions!');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "credits",
            message: "Please provide a brief list of your collaborators or teammembers. Also list any outside source help. If none list N/A. (Required)",
            validate: credits => {
                if (credits) {
                    return true;
                } else {
                    console.log('You need to enter your credits!');
                    return false;
                }
            }
        },
        {
            type: "checkbox",
            name: "license",
            message: "choose a license. (Required)",
            choices: ['MIT', 'Eclipse', 'Mozilla', 'ODBL', 'PERL'],
            validate: license => {
                if (license) {
                    return true;
                } else {
                    console.log('You need to enter a license!');
                    return false;
                }
                /* checkbox might not work may have to use list for sumbission */
        }
        },
        {
            type: "checkbox",
            name: "features",
            message: "list the features of your project. (Required)",
            choices: ["HTML", "CSS", "JS", "Node", "ES6", "Bootstrap", "JQuery"],
            validate: features => {
                if (features) {
                    return true;
                } else {
                    console.log('You need to enter your features!');
                    return false;
                }
        }
        },
        {
            type: "input",
            name: "contributionCapability",
            message: "List the ways other developers could contribute to your project. (Required)",
            validate: contributionCapability => {
                if (contributionCapability) {
                    return true;
                } else {
                    console.log('You need to enter your helpers!');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "futureTests",
            message: "Provide a brief list of how others can test the project. (Required)",
            validate: futureTests => {
                if (futureTests) {
                    return true;
                } else {
                    console.log('You need to enter some test methods!');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "githubName",
            message: "Please provide your github username for others to be able to contact you with questions. (Required)",
            validate: githubName => {
                if (githubName) {
                    return true;
                } else {
                    console.log('You need to enter your github name!');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "Please provide your email for others to be able to contact you with questions. (Required)",
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('You need to enter your github name!');
                    return false;
                }
            }
        }
    ])
};

// TODO: Create a function to write README file
function writeToFile(readmeFile) {
    fs.writeFile("./README.md", readmeFile, (err) => {
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