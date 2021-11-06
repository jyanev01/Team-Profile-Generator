const Manager = require('../lib/Manager.js');

// creates employee object
test('creates an manager object', () => {
    const manager = new Manager('Jordan', 1001, 'jordanyanev@gmail.com');

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
});

// gets name of school from getOfficeNumber ()
test('gets manager office  number', () => {
    const manager = new Manager('Jordan', 1001, 'jordanyan@gmail.com', 3001);

    expect(manager.getOfficeNumber()).toEqual(expect.any(Number));
});


// gets id from getId()
test('displays manager ID', () => {
    const manager = new Manager('Jordan', 1001, 'jordanyan@gmail.com', 3001);

    expect(manager.getId()).toEqual(expect.any(Number));
});

// gets email from getEmail()
test('display manager email', () =>{
    const manager = new Manager('Jordan', 1001, 'jordanyan@gmail.com', 3001);

    expect(manager.getEmail()).toEqual(expect.stringContaining(manager.email.toString()));
});


// get company title from getPosition()
test('get title from company', () => {
    const manager = new Manager('Jordan', 1002, 'jordanyan@gmail.com', 3001);

    expect(manager.getRole()).toEqual('Manager');
});
