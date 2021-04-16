const inquirer = require('inquirer');
const fs = require('fs');

// prompt created to create questions for readme to produce. this prompt is pulling from the installed inquirer module that will generate the questions that have been written.
inquirer.prompt(
    [
        {
            //type indicates the type of question that will be produced, name indicates the category of the question. and message is the question the user is given to answer.
            type:'input',
            name: 'title',
            message: 'What is the Project title?',
            //this function is to make sure the user has entered a response before being prompted to continue. A value must be enetered before continuing. if a value is entered the functionn will return true. if not the message will be produced.
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
    //then statement to layout template for readme, which includes categories for questions that will be answered. this statement is including those categories in for the user to recognize what category of question they are answering.
).then(({
    title,
    installation,
    usage,
    contribution,
    instructions,
    license,
    git,
    email
//this is the template structure where the user will be prompted to put in a title, answer the questions and enter contact info.
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
    //readme function that creates readme and allows it to work, this is using fs
    createNewfile(tilte,template);
}
);
    // writefile function for readme
    function createNewfile(fileName, data){
        //fs write file
    fs.writefile(`./${fileName.toLowerCase().split(' ').join('')}nd`,data,(err)=>{
        if(err){
            console.log(err)
        }
        console.log('Congratulations, Your README has been Created ');
    })
    }
