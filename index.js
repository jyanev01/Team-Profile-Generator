const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require("inquirer");

const employeeArr = [];

const askManager = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: "What is the Manager's name?",
            name: 'mgrName'
        },
        // {
            // all questions for manager
        // }
    ]).then((answers) => {
        console.log(answers)
        const newInstance = new Manager(answers.mgrName)
        employeeArr.push(newInstance)
        console.log(newInstance)
        console.log(newInstance.getPosition())
    })
    
}

const mainMenu = () => {
// main menu will prompt to go chose who to set up: Manager, Engineer, or Intern

}

const askEngineer = () => {

}

const askIntern = () => {

}


askManager();

mainMenu();

askEngineer();
askIntern();