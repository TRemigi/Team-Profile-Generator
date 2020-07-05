const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);

        this.roleInfo = `School: ${school}`;
        this.role = 'Intern';
        this.roleInfoType = 'School';
    }

    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;