const { readJSON, writeJSON } = require("../../data");
module.exports = (req, res) => {
  const { name, lastName, address, birthdate } = req.body;

  const user = readJSON("users.json");
  const usersModify = user.map((user) => {
    if (user.id == req.params.id) {
      user.name = name.trim();
      user.lastName = lastName.trim();
      user.address = address;
      user.birthdate = birthdate;
    }
    return user;
  });

  writeJSON(usersModify, "users.json");
  return res.redirect("/users/profile");
};