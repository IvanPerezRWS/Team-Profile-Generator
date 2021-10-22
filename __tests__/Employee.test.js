


//name, id, email, getname(), getId() getEmail() getRole()


const Employee = require('../lib/Employee');

const employeeTest = new Employee('Dave', '4', 'DaveMP@gmail.com', 'Employee');

test('Check name property', () => {
    expect(employeeTest.name).toBe('Dave');
});

test('Check id property', () => {
    expect(employeeTest.id).toBe('4');
});
test('Check email property', () => {
    expect(employeeTest.email).toEqual(expect.stringContaining('@'));
});
test('Check role property', () => {
    expect(employeeTest.role).toBe('Employee');
});

