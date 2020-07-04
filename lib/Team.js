const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const inquirer = require('inquirer');

class Team{
    constructor() {

    this.managers = [];
    this.engineers = [];
    this.interns = [];

    }

    startTeam() {
        inquirer.prompt([{
                type: 'input',
                name: 'name',
                message: 'Enter Team Manager name:',
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
                message: 'Enter Team Manager ID:',
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
                message: 'Enter Team Manager email:',
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
                name: 'officeNum',
                message: 'Enter Team Manager office number:',
                validate: officeNumInput => {
                    if (officeNumInput) {
                        return true;
                    } else {
                        console.log('***Office number is required***');
                        return false;
                    }
                }
            }])
            .then(answers => {
                const {
                    name,
                    id,
                    email,
                    officeNum
                } = answers;
                let newManager = new Manager(name, id, email, officeNum);
                return newManager;
            }).then(newManager => {
                this.managers.push(newManager);
                console.log(this.managers);

                return this.addTeam();
            })
            .catch(error => {
                console.log(error);
            });

    }

    addEngineer() {
        inquirer.prompt([{
                type: 'input',
                name: 'name',
                message: 'Enter engineer name:',
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
                message: 'Enter engineer ID:',
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
                message: 'Enter engineer email:',
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
                name: 'github',
                message: 'Enter engineer GitHub Username:',
                validate: officeNumInput => {
                    if (officeNumInput) {
                        return true;
                    } else {
                        console.log('***GitHub Username is required***');
                        return false;
                    }
                }
            }])
            .then(answers => {
                const {
                    name,
                    id,
                    email,
                    github
                } = answers;
                let newEngineer = new Engineer(name, id, email, github);
                return newEngineer;
            }).then(newEngineer => {
                this.engineers.push(newEngineer);
                console.log(this.engineers);

                return this.addTeam();
            })
            .catch(error => {
                console.log(error);
            });

    }

    addIntern() {
        inquirer.prompt([{
                type: 'input',
                name: 'name',
                message: 'Enter intern name:',
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
                message: 'Enter intern ID:',
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
                message: 'Enter intern email:',
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
                name: 'school',
                message: 'Enter intern school:',
                validate: officeNumInput => {
                    if (officeNumInput) {
                        return true;
                    } else {
                        console.log('***school is required***');
                        return false;
                    }
                }
            }])
            .then(answers => {
                const {
                    name,
                    id,
                    email,
                    school
                } = answers;
                let newIntern = new Intern(name, id, email, school);
                return newIntern;
            }).then(newIntern => {
                this.interns.push(newIntern);
                console.log(this.interns);

                return this.addTeam();
            })
            .catch(error => {
                console.log(error);
            });
    }

    addTeam() {
        inquirer.prompt({
            type: 'list',
            name: 'roleSelect',
            message: 'Would you like to add another team member?',
            choices: ["Engineer", "Intern", "I don't want to add anymore team members"]
        }).then(answer => {
            const {roleSelect} = answer;
            console.log(roleSelect);
            if (roleSelect === 'Engineer') {
                return this.addEngineer();
            } else if (roleSelect === 'Intern') {
                return this.addIntern();
            } else {
                return console.log(this); /*buildHtml();*/
            }
        });
    };
};

module.exports = Team;