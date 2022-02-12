// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        name: "readmeTitle",
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
        /* make this a optional question / use confirm to determine if this is wanted? */
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
        /* add a confirm to determine if this is wanted? */
    },
    {
        type: "input",
        name: "license",
        message: "choose a license."
        /* look at what licences should be available. make this question multiple choice 
        
        ${renderLicenseLink(data.license)} \n
        ${renderLicenseSection(data.license, data.name)} \n
        `]
        }*/
    },
    {
        type: "input",
        name: "badges",
        message: "Insert multiple choice badges"

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
        message: "list the features of your project.",
        choices: ["HTML", "CSS", "JS", "Node", "ES6", "Bootstrap", "JQuery"]
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

    inquirer
        .prompt([
            /* Pass your questions in here */
        ])
        .then((answers) => {
            /* create readme files with input */
        })
        .catch((err) => {
            if (err) {
                console.log(err);
                return;
            }
        });

    /* use prompt.then style code
    catch errors and keep data inputed */
}

// Function call to initialize app
init();
