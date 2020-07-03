const inquirer = require("inquirer");

class Employee {
    constructor(name = '', id = '', email = '') {
        this.name = name;
        this.id = id;
        this.email = email;

        this.html;
    }

    getName() {
        
    };

    getId() {
        
    };

    getEmail() {
        
    };

    getRole() {
        return 'Employee';
    };
}

module.exports = Employee;