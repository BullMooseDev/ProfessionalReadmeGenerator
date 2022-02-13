const generateReadme = require('../dist/utils/generate-readme');

function generateLicense(licenseArr) {
    let finalLicense = '';
   
    for (i = 0; i< licenseArr; i++) {

        if(licenseArr[i] == "MIT") {
            licenseSection = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
        } if (licenseArr[i] == 'Eclipse') {
            licenseSection = '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
        } if (licenseArr[i] == 'Mozilla') {
            licenseSection = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
        } if (licenseArr[i] == 'ODBL') {
            licenseSection = '[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)'
        } if (licenseArr[i] == 'PERL') {
            licenseSection = '[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)'
        };
     };
    return finalLicense
   };

const reamdeTemplate = questionData => {

return `# ${questionData.readmeTitle}

## Description
- ${questionData.description}
- ${questionData.motivation}
- ${questionData.theBigWhy}
- ${questionData.problemSolving}
- ${questionData.learningCurve}

## Table of Contents
[Installation](##Installation)
[Usage](##Usage)
[Credits](##Credits)
[Licensing](##License)
[Features](##Features)
[Contributions](##Contributions)
[Testing](##Future)

## Installation Instructions
${questionData.installInstructions}

## Usage
${questionData.usage}

## Credits
${questionData.credits}

## License
${generateLicense(questionData.license)}

## Features
${questionData.features}

## Contributions
${questionData.contributionCapability}

## Future Testing
${questionData.futureTests}

## Questions
If you have any questions, comments or concerns please click [here!](https://github.com/${questionData.githubName})
Or, alternatively you can contact me via [email](${questionData.email}).
`;
};

module.exports = reamdeTemplate;




/*     let licenseSection = "No license/s selected.";

    if(questionData.license == "MIT") {
        licenseSection = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    } if (questionData.license == 'Eclipse') {
        licenseSection = '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
    } if (questionData.license == 'Mozilla') {
        licenseSection = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
    } if (questionData.license == 'ODBL') {
        licenseSection = '[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)'
    } if (questionData.license == 'PERL') {
        licenseSection = '[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)'
    } */