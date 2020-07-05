const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        super(name, id, email);

        this.roleInfo = `<a href="tel:${officeNum}">${officeNum}</a>`;
        this.role = 'Manager';
        this.roleInfoType = 'Office Number';
    }
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;