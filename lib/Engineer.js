const Employee = require('../lib/Employee');

class Engineer extends Employee {
    constructor(name, id, email) {
        super(name, id, email);
    }
}

module.exports = Engineer;