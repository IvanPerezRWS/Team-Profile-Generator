
//name, id, email, getname(), getId() getEmail() getRole()
// School 

const { expect, test } = require('@jest/globals');
const exp = require('constants');
const Intern = require('../lib/Intern');

const internTest = new Intern('Jack', '2', 'Jacksegway@gmail.com', 'Intern', 'A&M');

test('Check name property', () => {
    expect(internTest.name).toBe('Jack');
});
test('Check id property', () => {
    expect(internTest.id).toBe('2');
});
test('Check email property', () => {
    expect(internTest.email).toEqual(expect.stringContaining('@'));
});
test('Check role property', () => {
    expect(internTest.role).toBe('Intern');
});
test('Check school property', () => {
    expect(internTest.school).toBe('A&M');
});

