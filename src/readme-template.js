const generateReadme = require('../dist/utils/generate-readme');

const reamdeTemplate = questionData => {
    let licenseSection = "No license selected."

    if(questionData.license == "MIT") {
        licenseSection = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    }
    return `# ${questionData.readmeTitle}
this is a test line that I want to see in my new file

## License

${licenseSection}
`;
    // ## ${description}
    // ## ${tableofcontents}
    // ## ${installation}
    // ## ${usage}
    // ## ${credits}
    // ## ${license}
    // ## ${badges}
    // ## ${features}
    // ## ${howToContribute}
    // ## ${tests}
};

module.exports = reamdeTemplate;