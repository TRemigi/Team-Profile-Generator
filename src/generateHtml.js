const Html = require('./Html');
const fs = require('fs');

generateHtml = (team) => {
    let html = new Html();

    team.forEach(element => {
        html.body = 
        `${html.body}
        ${html.createEmployeeCard(element)}`
    });

    html.body = 
    `${html.body}
    ${html.foot}`;

    fs.writeFile('./dist/newteam.html', html.body, function (err) {
        if (err) {
            return console.log(err);
        } else {
        return console.log('HTML file created! Find it in the ./dist folder!');
        }
    });
    
}

module.exports = generateHtml;