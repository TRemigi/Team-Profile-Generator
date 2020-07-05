const Html = require('./Html');


generateHtml = (team) => {
    console.log(team);
    let html = new Html();

    team.forEach(element => {
        element.role = element.getRole();
        const { name, role, id, email, roleInfo } = element;
        let roleInfoType;
        if (element.role === 'Manager') {
            roleInfoType = 'Office Number';
        } else if (element.role === 'Engineer') {
            roleInfoType = 'GitHub Username'; 
        } else {
            roleInfoType = 'School';
        }

        html.markDown = 
        `${html.markDown}
        <div class="card">
            <div class="card-header text-white bg-dark mb-3">
                <h2>${name}</h2>
                <h4>${role}<span>icon</span></h4>
            </div>
                <div class="card-body font-weight-bold">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${id}</li>
                        <li class="list-group-item">Email:
                            <a href="${email}">${email}</a>
                        </li>
                        <li class="list-group-item">${roleInfoType}:
                            <a href="${roleInfo}">${roleInfo}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>`
    });

    html.markDown = 
    `${html.markDown}
    ${html.markDownFooter}`;

    console.log(html.markDown);
}

module.exports = generateHtml;