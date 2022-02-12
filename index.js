// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateReadme = require('/src/readme-template');

// TODO: Create an array of questions for user input
const questions = questionData => {
    console.log(` ADDING NEW README NOW`);

    if (!questionData) {
        questionData.newReadme = []
    }
    return inquirer
        .prompt([
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
                    /* include ability to add screenshots? */
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
                type: "input",
                name: "license",
                message: "choose a license. (Required)",
                validate: readmeTitleInput => {
                    if (readmeTitleInput) {
                        return true;
                    } else {
                        console.log('You need to enter a readme name!');
                        return false;
                    }
                }
                /* look at what licences should be available. make this question multiple choice 
                
                ${renderLicenseLink(data.license)} \n
                ${renderLicenseSection(data.license, data.name)} \n
                `]
                }*/
            },
            {
                type: "input",
                name: "badges",
                message: "Insert multiple choice badges. (Required)"

                /* function renderLicenseBadge(license) {}
        
                // Puts a link to the license
                const renderLicenseLink = (license) => {
                if(!license) {
                return '';
                }
                if(license === 'MIT License') {
                return `
                ### License Link
                [MIT License](https://choosealicense.com/licenses/mit/)
                `;
                }
                if(license === 'GNU GPLv3 License') {
                return `
                ### License Link
                [GNU GPLv3 License](https://choosealicense.com/licenses/gpl-3.0/)
                `;
                }
                }
        
                // Add the license text to the README
                const renderLicenseSection = (license, name) => {
                if(!license) {
                    return '';
                }
                if(license === 'MIT License') {
                return `
                ### License 
                MIT License
                Copyright (c) 2021 ${name}
                Permission is hereby granted, free of charge, to any person obtaining a copy
                of this software and associated documentation files (the "Software"), to deal
                in the Software without restriction, including without limitation the rights
                to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                copies of the Software, and to permit persons to whom the Software is
                furnished to do so, subject to the following conditions:
                The above copyright notice and this permission notice shall be included in all
                copies or substantial portions of the Software.
                THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                SOFTWARE.
                `;
                }
                if(license === 'GNU GPLv3 License') {
                return `
                ### License
                Copyright (C) <year>  <name of author>
                This program is free software: you can redistribute it and/or modify
                it under the terms of the GNU General Public License as published by
                the Free Software Foundation, either version 3 of the License, or
                (at your option) any later version.
                This program is distributed in the hope that it will be useful,
                but WITHOUT ANY WARRANTY; without even the implied warranty of
                MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
                GNU General Public License for more details.
                You should have received a copy of the GNU General Public License
                along with this program.  If not, see <https://www.gnu.org/licenses/>.
                `;
                }
                } */
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
        ]);
    };





// TODO: Create a function to write README file
function writeToFile(readmeFile) {
                fs.writeFile("./dist/readme.md"), readmeFile, (err) => {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    console.log('readme created!')
                };
            };

                // TODO: Create a function to initialize app
                function init() {
                    inquirer
                        .prompt([
                            /* Pass questions in here */
                        ])
                        .then((answers) => {
                            /* create readme files with user input*/
                        })
                        .catch((err) => {
                            if (err) {
                                console.log(err);
                                return;
                            };
                        });

                    /* use prompt.then style code
                    catch errors and keep data inputed */
                };

                // Function call to initialize app
                init();
