// const Team = require('../lib/Team');

generateHtml = (team) => {
    console.log(team);
    team.forEach(element => {
        element.role = element.getRole();
        if (element.role === 'Manager') {
            const { name, role, id, email, roleInfo } = element;
            console.log(`
            ${name} is a ${role}.
            Id: ${id}
            Email Address: ${email}
            Office Number: ${roleInfo}`)
        } else if (element.role === 'Engineer') {
            const { name, role, id, email, roleInfo } = element;
            console.log(`
            ${name} is a ${role}.
            Id: ${id}
            Email Address: ${email}
            GitHub: ${roleInfo}`)
        } else {
            const { name, role, id, email, roleInfo } = element;
            console.log(`
            ${name} is an ${role}.
            Id: ${id}
            Email Address: ${email}
            School: ${roleInfo}`)
        }
    });
}

module.exports = generateHtml;