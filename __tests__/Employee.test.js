const Employee = require ('../lib/Employee'); 

// creates employee object
test('creates an employee object', () => {
    const employee = new Employee('Jordan', 1001, 'jordanyanev@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// gets id from getId()
test('displays employee ID', () => {
    const employee = new Employee('Jordan', 1001, 'jordanyanev@gmail.com');

    expect(employee.getID()).toEqual(expect.any(Number));
});

// gets email from getEmail()
test('display employee email', () =>{
    const employee = new Employee('Jordan', 31, 'jordanyanev@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// get company title from getPosition()
test('display company title', () => {
    const employee = new Employee('Jordan', 31, 'jordanyanev@gmail.com');

    expect(employee.getPosition()).toEqual('Employee');
});