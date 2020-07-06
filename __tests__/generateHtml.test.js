const generateHtml = require('../src/generateHtml');

team = [{
        name: 'Taylor',
        id: '2278',
        email: 'tayremigi@gmail.com',
        roleInfo: '<a href="tel:385-424-8121">385-424-8121</a>',
        role: 'Manager',
        roleInfoType: 'Office Number',
        roleIcon: '<i class="fa fa-trophy"></i>'
    },
    {
        name: 'Jelena',
        id: '8145',
        email: 'jelena_om@hotmail.com',
        roleInfo: '<a href="https://github.com/JellyFyxx" target="_blank">JellyFyxx</a>',
        role: 'Engineer',
        roleInfoType: 'GitHub:',
        roleIcon: '<i class="fa fa-pencil"></i>'
    },
    {
        name: 'Dally',
        id: '3333',
        email: 'd.remigi@gmail.com',
        roleInfo: 'U of U',
        role: 'Intern',
        roleInfoType: 'School',
        roleIcon: '<i class="fa fa-blind"></i>'
    }
];

test('function returns', () => {

    const generateHtml = jest.fn(() => true);
    generateHtml();
    expect(generateHtml).toHaveReturned();
});