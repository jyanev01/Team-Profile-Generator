const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs');
const inquirer = require("inquirer");

const employeeArr = [];

// First set of questions
const askManager = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: "What is the Manager's name?",
            name: 'mgrName'
        },
        {
            type: 'input',
            message: "What is the Manager's ID?",
            name: 'mgrId'
        },
        {
            type: 'input',
            message: "What is the Manager's email?",
            name: 'mgrEmail'
        },
        {
            type: 'input',
            message: "What is the Manager's Office number?",
            name: 'mgrOfficeNumber'
        }
    ]).then((answers) => {
        console.log(answers)
        const manager = new Manager(answers)
        employeeArr.push(manager)
        console.log(manager)
        console.log(manager.getRole())

        
    })
    // attempt to call mainMenu() function after askManager() function has completed
    // .then(mainMenu())
    
};

// Second set of questions: main menu will prompt to go chose who to set up: Manager, Engineer, or Intern

const mainMenu = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'What type of employee would you like to add?',
            choices: ['Manager', 'Engineer', 'Intern'],
                validate: roleInput => {
                    if (roleInput === 'Manager') {
                        return askManager();
                    } else if (roleInput === 'Engineer') {
                        return askEngineer();
                    } else if (roleInput === 'Intern') {
                        return askIntern();
                    } else {
                        console.log("Please select a type of employee");
                        return false;
                    }
                }
        }
    ])
}

askManager();
// mainMenu();


// const askEngineer = () => {

// }

// const askIntern = () => {

// }


// askEngineer();
// askIntern();

// const writeFile = data => {
//     fs.writeFile('./dist/index.html', data, err => {
//         if (err) {
//             console.log(err);
//             return;
//         } else {
//             console.log( "Team profile has been successfully created!")
//         }
//     })
// };