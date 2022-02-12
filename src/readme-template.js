const generateReadme = require('../dist/utils/generate-readme');

const reamdeTemplate = questionData => {
            `# ${projectname}
            ## ${description}
            ## ${tableofcontents}
            ## ${installation}
            ## ${usage}
            ## ${credits}
            ## ${license}
            ## ${badges}
            ## ${features}
            ## ${howToContribute}
            ## ${tests}`;
};

module.exports('../dist/utils/generate-readme.js');