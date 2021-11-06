const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs');
const inquirer = require("inquirer");
const render = require('./src/page-template');

const employeeArr = [];

// Manager set of questions
const askManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: "What is the Manager's name?",
            name: 'mngrName'
        },
        {
            type: 'input',
            message: "What is the Manager's ID?",
            name: 'mngId'
        },
        {
            type: 'input',
            message: "What is the Manager's email?",
            name: 'mngrEmail'
        },
        {
            type: 'input',
            message: "What is the Manager's Office number?",
            name: 'mngOfficeNumber'
        }
    ]).then((answers) => {
        console.log(answers)
        // let [mngrName, mngId, mngrEmail, mngOfficeNumber] = answers;
        const manager = new Manager(answers.mngrName, answers.mngId, answers.mngrEmail, answers.mngOfficeNumber)
        
        employeeArr.push(manager)
        console.log(manager)
        console.log(manager.getRole())
        return;
    })
    // attempt to call mainMenu() function after askManager() function has completed
    .then( () => mainMenu())
    
};
console.log(

)

// Second set of questions: main menu will prompt to go chose who to set up: Manager, Engineer, or Intern
const mainMenu = () => {
    promptRole()
    .then(roleInput => {
        console.log(roleInput);
        console.log('=====================');
        if (roleInput.role === 'Manager') {
            askManager();
        } else if (roleInput.role === 'Engineer') {
            askEngineer();
        } else if (roleInput.role === 'Intern') {
            askIntern();
        } else if (roleInput.role === 'Exit') {
            console.log("Exit: I am finished!");
            writeFile();
        }
    })
};

const promptRole = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'What type of employee would you like to add?',
            choices: ['Manager', 'Engineer', 'Intern', 'Exit'],
        }
    ])
}


// Enineer question porompts
const askEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: "What is the Engineer's name?",
            name: 'engName'
        },
        {
            type: 'input',
            message: "What is the Engineer's ID?",
            name: 'engId'
        },
        {
            type: 'input',
            message: "What is the Engineer's email?",
            name: 'engEmail'
        },
        {
            type: 'input',
            message: "What is the Engineer's GitHub?",
            name: 'engGitHub'
        }
    ]).then((answers) => {
        console.log(answers)
        const engineer = new Engineer(answers.engName, answers.engId, answers.engEmail, answers.engGitHub)
        employeeArr.push(engineer)
        console.log(engineer)
        console.log(engineer.getRole())
    })
    .then( () => mainMenu())


}

// Intern set of prompts
const askIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: "What is the Intern's name?",
            name: 'intName'
        },
        {
            type: 'input',
            message: "What is the Intern's ID?",
            name: 'intId'
        },
        {
            type: 'input',
            message: "What is the Intern's email?",
            name: 'intEmail'
        },
        {
            type: 'input',
            message: "What is the Intern's School?",
            name: 'intSchool'
        }
    ]).then((answers) => {
        console.log(answers)
        const intern = new Intern(answers.intName, answers.intId, answers.intEmail, answers.intSchool)
        employeeArr.push(intern)
        console.log(intern)
        console.log(intern.getRole())
    })
    .then( () => mainMenu())


}

askManager();

// function buildTeam() {
//     // Create the output directory if the output path doesn't exist
//     if (!fs.existsSync(OUTPUT_DIR)) {
//       fs.mkdirSync(OUTPUT_DIR)
//     }
//     fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
// }

// const writeFile = employeeArr => {
//     fs.writeFile('index.html', employeeArr, err => {
//         if (err) {
//             console.log(err);
//             return;
//         } else {
//             console.log( "Team profile has been successfully created!")
//         }
//     })
// };