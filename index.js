const Employee = require("./lib/Employee");

const initializeApp = function () {
    this.employees = [];

    inquirer.prompt(
        {
            type: 'input',
            name: 'name',
            message: 'Enter employee name:',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('***Employee name is required***');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter employee ID:',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('***Employee ID is required***');
                    return false;
                }
            }

        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter employee email:',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('***Employee email is required***');
                    return false;
                }
            }
        })
        .then(({ name, id, email }) => {
            this.employees.push(new Employee(name, id, email));
        })
};