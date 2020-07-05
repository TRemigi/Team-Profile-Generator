const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const generateHtml = require('../src/generateHtml');
const inquirer = require('inquirer');

class Team{
    constructor() {

    this.team = [];
    
    }

    addEmployee(role, roleSpecific) {
        inquirer.prompt([{
                type: 'input',
                name: 'name',
                message: `Enter ${role} name:`,
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('***Name is required***');
                        return false;
                    }
                }
            }, {
                type: 'input',
                name: 'id',
                message: `Enter ${role} ID:`,
                validate: idInput => {
                    if (idInput) {
                        return true;
                    } else {
                        console.log('***ID is required***');
                        return false;
                    }
                }
            }, {
                type: 'input',
                name: 'email',
                message: `Enter ${role} email:`,
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log('***Email is required***');
                        return false;
                    }
                }
            }, {
                type: 'input',
                name: 'roleInfo',
                message: `Enter ${role} ${roleSpecific}:`,
                validate: roleSpecificInput => {
                    if (roleSpecificInput) {
                        return true;
                    } else {
                        console.log(`***${roleSpecific} is required***`);
                        return false;
                    }
                }
            }])
            .then(answers => {
                const {
                    name,
                    id,
                    email,
                    roleInfo
                } = answers;
                
                if (role === 'manager') {
                    let newEmployee = new Manager(name, id, email, roleInfo);
                    return newEmployee;
                } else if (role === 'intern') {
                let newEmployee = new Intern(name, id, email, roleInfo);
                return newEmployee;
                } else {
                    let newEmployee = new Engineer(name, id, email, roleInfo);
                return newEmployee;
                }
            }).then(newEmployee => {
                this.team.push(newEmployee);
                console.log(this.team);

                return this.addToTeam();
            })
            .catch(error => {
                console.log(error);
            });
    }

    addToTeam() {
        inquirer.prompt({
            type: 'list',
            name: 'roleSelect',
            message: 'Would you like to add another team member?',
            choices: ["Engineer", "Intern", "I don't want to add anymore team members"]
        }).then(answer => {
            const {roleSelect} = answer;
            console.log(roleSelect);
            if (roleSelect === 'Engineer') {
                return this.addEmployee('engineer', 'GitHub Username');
            } else if (roleSelect === 'Intern') {
                return this.addEmployee('intern', 'school');
            } else {
                return generateHtml(this.team);
            }
        });
    };
};

module.exports = Team;