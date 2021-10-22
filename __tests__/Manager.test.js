

//name, id, email, getname(), getId() getEmail() getRole()
// officenumber getRole -> return'Manager'

const Manager = require('../lib/Manager');

const managerTest = new Manager('Marcus', '8', 'MarcusLaminos@gmail.com', 'Manager', '123');

test('Check name property', () => {
    expect(managerTest.name).toBe('Marcus');
});
test('Check id property', () => {
    expect(managerTest.id).toBe('8');
});
test('Check email property', () => {
    expect(managerTest.email).toEqual(expect.stringContaining('@'));
});
test('Check role property', () => {
    expect(managerTest.role).toBe('Manager');
});
test('Check room property', () => {
    expect(managerTest.officeNumber).toBe('123');
});