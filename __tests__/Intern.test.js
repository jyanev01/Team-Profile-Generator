const Intern = require('../lib/Intern.js');

// creates employee object
test('creates an intern object', () => {
    const intern = new Intern('Jordan', 1001, 'jordanyanev@gmail.com');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
});

// gets name of school from getSchool ()
test('gets intern school value', () => {
    const intern = new Intern('Jordan', 1001, 'jordanyan@gmail.com', 'UofR');

    expect(intern.getSchool()).toEqual(expect.any(String));
});


// gets id from getId()
test('displays intern ID', () => {
    const intern = new Intern('Jordan', 1001, 'jordanyan@gmail.com', 'UofR');

    expect(intern.getId()).toEqual(expect.any(Number));
});

// gets email from getEmail()
test('display intern email', () =>{
    const intern = new Intern('Jordan', 1001, 'jordanyan@gmail.com', 'UofR');

    expect(intern.getEmail()).toEqual(expect.stringContaining(intern.email.toString()));
});


// get company title from getPosition()
test('get title from company', () => {
    const intern = new Intern('Jordan', 1002, 'jordanyan@gmail.com', 'UofR');

    expect(intern.getRole()).toEqual('Intern');
});
