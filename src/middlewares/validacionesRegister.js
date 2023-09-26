const { check, body, validationResult } = require("express-validator");
const users = require('../data/users.json')

/* Validaciones */
const arrayValidaciones = [
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
    
    body('address')
        .notEmpty()
        .withMessage("El campo direccion no debe estar vacio")
        .isLength({ min: 3 })
        .withMessage("El direccion debe tener minimo 3 caracteres"),    
        
    body("email")
        .notEmpty()
        .withMessage("El email es obligatorio")
        .isEmail()
        .withMessage("Formato inválido")
        .custom((value, { req }) => {
          const user = users.find((user) => user.email === value);
    
          if (user) {
            return false;
          }
          return true;
        })
        .withMessage("El email ya se encuentra registrado"),

    body("password").isLength({
            min: 6,
          })
        .withMessage("Tu constraseña debe tener minimo 6 caracteres")  ,
    body('passwordTwo')
            .custom((value,{req}) => {
                if(value !== req.body.password){
                    return false
                }
                return true
            }).withMessage('Las contraseñas no coinciden'),
    
    body("role")
            .notEmpty()
            .withMessage("El campo rol no debe estar vacío")
            .isIn(["admin", "user"])
            .withMessage("Selecciona un rol válido"),        
    
    body("birthdate")
            .notEmpty()
            .withMessage("El campo fecha de nacimiento no debe estar vacío")
      

];

const validateCreateForm = (req, res, next) => {
    const errors = validationResult(req);
    console.log(errors.mapped());
    if (errors.isEmpty()) {
        next();
    } else {
        res.render("register", {
            errors: errors.mapped(),
            old:req.body
        });
    }
};

module.exports = {
    arrayValidaciones,
    validateCreateForm
};
