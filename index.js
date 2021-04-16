const inquirer = require('inquirer)');
const fs = reuiqre('fs');


inquirer.prompt(
    [
        {
            type:'input',
            name: 'title',
            message: 'What is the Project title?',
            
        },
        {
            type:'input',
            name: 'installation',
            message: 'How do you install the app?',
        },

        {
            type:'input',
            name: 'usage',
            message: 'What was your usage?',
        },
        {
            type:'input',
            name: 'contribution',
            message: 'What was your contribution?',
        },

        {
            type:'input',
            name: 'instructions',
            message: 'Test instructions to follow',
        },

        {
            type:'list',
            name: 'license',
            message: 'What license did you use?',
            choices:['ISC'],
        },

        {
            type:'input',
            name: 'Github Username:',
            message: 'git',
        },

        {
            type:'input',
            name: 'email',
            message: 'E-mail:',
            choices:['ISC'],
        },

        


    ]
)