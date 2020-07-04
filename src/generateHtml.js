// const Team = require('../lib/Team');

generateHtml = (team) => {
    console.log(team);
    team.forEach(element => {
        element.role = element.getRole();
        if (element.role === 'Manager') {
            const { name, role, id, email, officeNum } = element;
            console.log(`
            ${name} is a ${role}.
            Id: ${id}
            Email Address: ${email}
            Office Number: ${officeNum}`)
        } else if (element.role === 'Engineer') {
            const { name, role, id, email, github } = element;
            console.log(`
            ${name} is a ${role}.
            Id: ${id}
            Email Address: ${email}
            GitHub: ${github}`)
        } else {
            const { name, role, id, email, school } = element;
            console.log(`
            ${name} is an ${role}.
            Id: ${id}
            Email Address: ${email}
            School: ${school}`)
        }
    });
}

module.exports = buildHtml;