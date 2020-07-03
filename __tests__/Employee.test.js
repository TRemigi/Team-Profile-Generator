const Employee = require('../lib/Employee');

test('Creates Employee object', () => {
    const guy = new Employee('Guy', 20205, 'guy@place.com');

    expect(guy.name).toBe('Guy');
    expect(guy.id).toEqual(expect.any(Number));
    expect(guy.email).toEqual(expect.any(String));
    
});