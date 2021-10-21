


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


/*
test('Check id property', () => {
    const idTest = new Employee('Dave', '4', 'DaveMP@gmail.com', 'Employee');

    expect(idTest.id).toBe('4');
});

*/
/*
const employeeTest = new Employee ("Ivan", "3", "ivanrws@gmail.com", "Employee");

describe('Employee', () => {
    testName('has a name', () => {
        expect(employeeTest.name.toEqual(expect.any(String)))
        expect(employeeTest.name.length.toBeGreaterThan(1))
    });
    testEmail('email must contain', () => {
        expect(employeeTest.email.toEqual(expect.stringContaining('@')))
    });
    testRole('expect employee role = employee', () => {
        expect(employeeTest.role).toBe('Employee')
    });
});

*/

