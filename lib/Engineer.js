const Employee = require('../lib/Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);

        this.roleInfo = `<a href="https://github.com/${github}" target="_blank">${github}</a>`;
        this.role = 'Engineer';
        this.roleInfoType = 'GitHub Username'
    }

    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;