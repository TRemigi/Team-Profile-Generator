const Team = require('../lib/Team');

test('function returns', () => {

    const addToTeam = jest.fn(() => true);
    addToTeam();
    expect(addToTeam).toHaveReturned();
});

test('function returns', () => {

    const addEmployee = jest.fn(() => true);
    addEmployee('engineer', 'GitHub Username');
    expect(addEmployee).toHaveReturned();
});