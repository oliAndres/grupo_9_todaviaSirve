const { check, body } = require("express-validator");
const db = require('../database/models')
const { compareSync } = require("bcryptjs");

module.exports = [
  check("email")
    .notEmpty()
    .withMessage("El email es obligatorio").bail()
    .isEmail()
    .withMessage("El email no es valido"),
  body("password")
    .custom((value, {req}) => {
        return db.User.findOne({
            where : {
                email : req.body.email
            }
        }).then(user => {
            if(!user || !compareSync(value, user.password)){
                return Promise.reject()
            }
        }).catch(() => Promise.reject('El email o la contraseña son incorrectos'))
    })

];
