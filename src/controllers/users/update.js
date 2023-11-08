const {validationResult} = require('express-validator')
const { readJSON, writeJSON } = require("../../data");
module.exports = (req, res) => {
  const { name, lastName, address, birthdate } = req.body;
const errors = validationResult(req)
if (errors.isEmpty()){
  const user = readJSON("users.json");
  const usersModify = user.map((user) => {
    if (user.id == req.session.userLogin.id) {
      user.name = name.trim();
      user.lastName = lastName.trim();
      user.address = address;
      user.birthdate = birthdate;
    }
    return user;
  });

  writeJSON(usersModify, "users.json");
  req.session.userLogin.name= name.trim()
  res.locals.userLogin = req.session.userLogin
  return res.redirect("/");

} else{
  const users = readJSON('users.json');
  const user = users.find(user => user.id === req.session.userLogin.id);

  return res.render('profile', {
      ...user,
      errors : errors.mapped()
  });

}
  
};