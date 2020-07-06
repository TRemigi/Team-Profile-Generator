const Html = require('../src/Html');

test('creates Html object', () => {
    const html = new Html();

    expect(html.body).toEqual(expect.any(String));
    expect(html.foot).toEqual(expect.any(String));
});

test('returns string', () => {
    const html = new Html();
    element = {
        name: 'Dally',
        id: '3333',
        email: 'd.remigi@gmail.com',
        roleInfo: 'U of U',
        role: 'Intern',
        roleInfoType: 'School',
        roleIcon: '<i class="fa fa-blind"></i>'
    }
;
    html.createEmployeeCard(element);
    expect(html.createEmployeeCard(element)).toEqual(expect.any(String));
})