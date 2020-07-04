const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        super(name, id, email);

        this.officeNum = officeNum;
        this.html = 'html for manager card will go here';
    }
}

module.exports = Manager;