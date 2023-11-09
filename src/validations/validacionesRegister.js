const db = require('../database/models')
const { check, body  } = require("express-validator");
const users = require('../data/users.json');

/* Validaciones */
module.exports = [
    body('name')
        .notEmpty()
        .withMessage("El campo nombre no debe estar vacio")
        .isLength({ min: 3 }) 
        .withMessage("El Nombre debe tener minimo 3 caracteres")
        .isAlpha()
        .withMessage("El nombre debe contener solo caracteres alfabéticos"),

    body('lastName')
        .notEmpty()
        .withMessage("El campo apellido no debe estar vacio")
        .isLength({ min: 3 })
        .withMessage("El apellido debe tener minimo 3 caracteres")
        .isAlpha()
        .withMessage("El apellido debe contener solo caracteres alfabéticos"),
        
    body("email")
        .notEmpty()
        .withMessage("El email es obligatorio")
        .isEmail()
        .withMessage("Formato inválido")
        .custom((value, { req }) => {
            return db.User.findOne({
                where : {
                    email : value
                }
            }).then(user => {
                if(user){
                    return Promise.reject()
                }
            }).catch(() => Promise.reject("El email ya se encuentra registrado"))
        }),

    body("password").isLength({
            min: 6,
          })
        .withMessage("Tu constraseña debe tener minimo 6 caracteres"),
    
      

];