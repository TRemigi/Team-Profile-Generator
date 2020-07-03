const Intern = require('../lib/Intern');

test('Creates new Intern object', () => {
    const intern = new Intern('Dave', 20508, 'intern@sux.com');

    expect(intern.name).toBe('Dave');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
});