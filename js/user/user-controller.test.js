const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController and check mail and Id', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
  expect(userController.getUsers()).toContain(user);
  
  userController.findByEmail(user);
  expect(userController.getUsers()).toContain(user)

  userController.findById(user);
  expect(userController.getUsers()).toContain(user)

});


test('check mail', () => {    
    let user = new User(1234, "Santiago", "santiago@generation.org");
    
  
  userController.findByEmail(user);
  expect(userController.getUsers()).toContainEqual(user)

});


test('check Id', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    
  
  userController.findById(user);
  expect(userController.getUsers()).toContainEqual(user)

});


test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });


