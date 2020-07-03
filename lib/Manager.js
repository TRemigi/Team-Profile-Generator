const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name = '', id, email) {
        super(name, id, email);

        this.html = 'html for manager card will go here';
    }
}

module.exports = Manager;