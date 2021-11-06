const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs');
const inquirer = require("inquirer");

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

askManager();
// mainMenu();


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


// askEngineer();
// askIntern();

// const writeFile = employeeArr => {
//     fs.writeFile('index.html', employeeArr, err => {
//         if (err) {
//             console.log(err);
//             return 
//             `
//             <!DOCTYPE html>
//             <html lang="en">
//                 <head>
//                     <meta charset="UTF-8">
//                     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//                     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//                     <title>Team Profiles</title>
//                 </head>
//                 <body>
                
                    
                    
//                 </body>
//                 <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
//                 <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
//                 <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
//                 </html>
            
            
            
            
//             ` 
//             ;
//         } else {
//             console.log( "Team profile has been successfully created!")
//         }
//     })
// };