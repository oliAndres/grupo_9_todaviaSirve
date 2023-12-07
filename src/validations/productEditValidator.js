const { check,body} = require("express-validator");
//const db = require('../database/models');

module.exports = [
  check("name")
    .notEmpty()
    .withMessage("Es obligatorio")
    .bail()
    .isLength({
      min: 4,
      max: 50,
    })
    .withMessage("Debe tener entre 4 y 20 caracteres"),
  check("brandId")
    .notEmpty()
    .withMessage("Es obligatorio"),  

  check("price")
    .notEmpty()
    .withMessage("Es obligatorio")
    .isInt({
      gt: 1,
    })
    
    .withMessage("Debe ser positivo"),
  check("description").isLength({
    min: 20,
    max: 500,
  }).withMessage('Debe tener entre 20 y 500 caracteres'),
  
  check("categoryId")
    .notEmpty()
    .withMessage("Es obligatorio"),

 /* body('image')
    .custom((value,{req}) => {
      if(!req.files.image && !req.fileValidatorError.image){
        return false
      }
      return true
    }).withMessage('Debes subir una imagen principal'),*/

]; 
