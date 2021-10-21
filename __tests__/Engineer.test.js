


const checkIfEqual = require('../lib/random.js')

test('checks if 10 is equal to 10', () => {
    expect(checkIfEqual(10, 10)).toBe(true);
});
/*
// name, id, email, getname(), getId() getEmail() getRole()-> Return 'Engineer,
// also Github-name

const Engineer = require('../lib/Engineer');

test('Test engineer properties', () => {
    const engineerTest = new Engineer ('John', '5', 'Johnmwa@gmail.com', 'Engineer', 'JohnGithub')
    expect(engineerTest.name).toBe(expect('John'));
    expect(engineerTest.id).toBe(expect.any(Number));
    expect(engineerTest.email).toEqual(expect.stringContaining('@'));
    expect(engineerTest.role).toBe(expect('Engineer'));
    expect(engineerTest.github).toBe(expect('JohnGithub'))
});

*/