const {body} = require('express-validator');
const {compareSync} = require('bcryptjs')
const { readJSON } = require('../data');

module.exports = [
    body('email')
        .notEmpty().withMessage('El email es requerido').bail()
        .isEmail().withMessage('El email no es valido'),
    body('password')
        .notEmpty().withMessage('La contraseña es requerida')
        .custom((value, {req}) => {
            const users = readJSON('users.json');
            const user = users.find(user => user.email === req.body.email)
            if(!user || !compareSync(value,user.password)){
                return false
            }
            return true
        }).withMessage('El email o la contraseña son incorrectos')
]
