const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const loginValidator = require("../validations/loginValidator");
const checkInvited = require('../middlewares/checkInvited');
const loginProcess = require('../controllers/users/loginProcess');
const {arrayValidaciones,validateCreateForm } = require('../middlewares/validacionesRegister')

/* GET users listing. */
router.get("/register", usersController.register)
router.get("/login", checkInvited, usersController.login)
router.post("/login", loginProcess, usersController.loginProcess)
router.get('/register', usersController.register);
router.post('/registerOk', arrayValidaciones,validateCreateForm,usersController.newUser);
router.get('/logOut', usersController.logOut);

module.exports = router;
