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
            name: 'name'
        },
        {
            type: 'input',
            message: "What is the Manager's ID?",
            name: 'id'
        },
        {
            type: 'input',
            message: "What is the Manager's email?",
            name: 'email'
        },
        {
            type: 'input',
            message: "What is the Manager's Office number?",
            name: 'officeNumber'
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
};

askManager();
// mainMenu();


const askEngineer = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: "What is the Engineer's name?",
            name: 'engName'
        },
        {
            type: 'input',
            message: "What is the Engineer's ID?",
            id: 'engId'
        },
        {
            type: 'input',
            message: "What is the Engineer's email?",
            email: 'engEmail'
        },
        {
            type: 'input',
            message: "What is the Engineer's GitHub?",
            github: 'engGitHub'
        }
    ]).then((answers) => {
        console.log(answers)
        const engineer = new Engineer(answers)
        employeeArr.push(engineer)
        console.log(engineer)
        console.log(engineer.getRole())
    })

}


const askIntern = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: "What is the Intern's name?",
            name: 'intName'
        },
        {
            type: 'input',
            message: "What is the Intern's ID?",
            id: 'intId'
        },
        {
            type: 'input',
            message: "What is the Intern's email?",
            email: 'intEmail'
        },
        {
            type: 'input',
            message: "What is the Intern's School?",
            school: 'intSchool'
        }
    ]).then((answers) => {
        console.log(answers)
        const intern = new Intern(answers)
        employeeArr.push(intern)
        console.log(intern)
        console.log(intern.getRole())
    })

}


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