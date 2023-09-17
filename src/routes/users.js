const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const loginValidator = require("../validations/loginValidator");


/* GET users listing. */
router.get("/register", usersController.register)
router.get("/login",  loginValidator, usersController.login)
router.post("/login", usersController.loginProcess)
router.get('/register', usersController.register);
router.get('/registerOk', usersController.registerOk);
router.get('/logOut', usersController.logOut);

module.exports = router;
