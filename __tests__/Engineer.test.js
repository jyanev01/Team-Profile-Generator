const Engineer = require('../lib/Engineer.js');

// creates employee object
test('creates an engineer object', () => {
    const engineer = new Engineer('Jordan', 1001, 'jordanyanev@gmail.com');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
});

// gets github from getGithub ()
test('gets engineer github value', () => {
    const engineer = new Engineer('Jordan', 1001, 'jordanyan@gmail.com', 'jyanev01');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});


// gets id from getId()
test('displays engineer ID', () => {
    const engineer = new Engineer('Jordan', 1001, 'jordanyan@gmail.com', 'jyanev01');

    expect(engineer.getId()).toEqual(expect.any(Number));
});

// gets email from getEmail()
test('display engineer email', () =>{
    const engineer = new Engineer('Jordan', 1001, 'jordanyan@gmail.com', 'jyanev01');

    expect(engineer.getEmail()).toEqual(expect.stringContaining(engineer.email.toString()));
});


// get company title from getPosition()
test('get title from company', () => {
    const engineer = new Engineer('Jordan', 1001, 'jordanyan@gmail.com', 'jyanev01');

    expect(engineer.getRole()).toEqual('Engineer');
});
