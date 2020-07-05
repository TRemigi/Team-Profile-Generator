// const Team = require('../lib/Team');

generateHtml = (team) => {
    console.log(team);
    team.forEach(element => {
        element.role = element.getRole();
        const { name, role, id, email, roleInfo } = element;
        let roleInfoType;

        if (element.role === 'Manager') {
            roleInfoType = 'Office Number:';
        } else if (element.role === 'Engineer') {
            roleInfoType = 'GitHub Username:'; 
        } else {
            roleInfoType = 'School:';
        }
        console.log(`
        ${name} is an ${role}.
        Id: ${id}
        Email Address: ${email}
        ${roleInfoType} ${roleInfo}`)
    });
}

module.exports = generateHtml;