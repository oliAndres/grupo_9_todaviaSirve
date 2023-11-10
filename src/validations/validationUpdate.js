const { body } = require("express-validator");

/* Validaciones */
const arrayValidationUpdate = [
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
  
];


module.exports = arrayValidationUpdate;