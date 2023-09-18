const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const loginValidator = require("../validations/loginValidator");
const loginProcess = require('../controllers/users/loginProcess');
const {arrayValidaciones,validateCreateForm } = require('../middlewares/validacionesRegister');
const userCheck = require('../middlewares/userCheck');
const notUserCheck = require('../middlewares/notUserCheck');

/* GET users listing. */
router.get("/register", usersController.register)
router.get("/login", notUserCheck, usersController.login)
router.post("/login", loginValidator, usersController.loginProcess)
router.get('/register', usersController.register);
router.post('/registerOk', arrayValidaciones,validateCreateForm,usersController.newUser);
router.get('/logOut', usersController.logOut);
router.put('/update', usersController.update)

module.exports = router;
