const Html = require('./Html');
const fs = require('fs');

generateHtml = (team) => {
    console.log(team);
    let html = new Html();

    team.forEach(element => {
        html.body = 
        `${html.body}
        ${html.createEmployeeCard(element)}`
    });

    html.body = 
    `${html.body}
    ${html.foot}`;

    
}

module.exports = generateHtml;