const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const loginValidator = require("../validations/loginValidator");
const checkInvited = require('../middlewares/checkInvited');
const loginProcess = require('../controllers/users/loginProcess');


/* GET users listing. */
router.get("/register", usersController.register)
router.get("/login", checkInvited, usersController.login)
router.post("/login", loginProcess, usersController.loginProcess)
router.get('/register', usersController.register);
router.get('/registerOk', usersController.registerOk);

module.exports = router;
