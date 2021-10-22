
// name, id, email, getname(), getId() getEmail() getRole()-> Return 'Engineer,
// also Github-name

const { test } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

const engineerTest = new Engineer('Miles', '6', 'MilesMorales@gmail.com', 'Engineer', 'MilesGithub');

test('Check name property', () => {
    expect(engineerTest.name).toBe('Miles');
});

test('Check id property', () => {
    expect(engineerTest.id).toBe('6');
});
test('Check email property', () => {
    expect(engineerTest.email).toEqual(expect.stringContaining('@'));
});
test('Check role property', () => {
    expect(engineerTest.role).toBe('Engineer');
});




/*
test('Test engineer properties', () => {
    const engineerTest = new Engineer ('John', '5', 'Johnmwa@gmail.com', 'Engineer', 'JohnGithub')
    expect(engineerTest.name).toBe(expect('John'));
    expect(engineerTest.id).toBe(expect.any(Number));
    expect(engineerTest.email).toEqual(expect.stringContaining('@'));
    expect(engineerTest.role).toBe(expect('Engineer'));
    expect(engineerTest.github).toBe(expect('JohnGithub'))
});
*/
