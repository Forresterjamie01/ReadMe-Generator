const inquirer = require('inquirer)');
const fs = reuiqre('fs');


inquirer.prompt(
    [
        {
            type:'input',
            name: 'title',
            message: 'What is the Project title?',
            validate: (value)=>{ if(value){return true} else {return 'Please input a value to proceed'}},
        },
        {
            type:'input',
            name: 'installation',
            message: 'How do you install the app?',
            validate: (value)=>{ if(value){return true} else {return 'Please input a value to proceed'}},
        },

        {
            type:'input',
            name: 'usage',
            message: 'What was your usage?',
            validate: (value)=>{ if(value){return true} else {return 'Please input a value to proceed'}},
        },
        {
            type:'input',
            name: 'contribution',
            message: 'What was your contribution?',
            validate: (value)=>{ if(value){return true} else {return 'Please input a value to proceed'}},
        },

        {
            type:'input',
            name: 'instructions',
            message: 'Test instructions to follow',
            validate: (value)=>{ if(value){return true} else {return 'Please input a value to proceed'}},
        },

        {
            type:'list',
            name: 'license',
            message: 'What license did you use?',
            choices:['ISC'],
            validate: (value)=>{ if(value){return true} else {return 'Please input a value to proceed'}},
        },

        {
            type:'input',
            name: 'git',
            message: 'Github Username:',
            validate: (value)=>{ if(value){return true} else {return 'Please input a value to proceed'}},
        },

        {
            type:'input',
            name: 'email',
            message: 'E-mail:',
            validate: (value)=>{ if(value){return true} else {return 'Please input a value to proceed'}},
        },

        


    ]
).then(({
    title,
    installation,
    usage,
    contribution,
    instructions,
    license,
    git,
    email

})=>{
    const template =`# ${title}
    *[Installation](#installation)
    *[Usage](#usage)
    *[contribution](#contribution)
    *[instructions](#instructions)
    *[license](#license)
    ${installation}
    ## usage
    ${usage}
    ## contribution
    ${contribution}
    ## instructions
    ${instructions}
    ## license
    ${license}

    #Contact
    #Github :${git}
    #email: ${email} `;
}
)

