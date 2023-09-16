const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const loginValidator = require("../validations/loginValidator");
const checkInvited = require('../middlewares/checkInvited');
const checkUserLogin = require('../middlewares/checkUserLogin');

/* GET users listing. */
router.get("/register",checkInvited, usersController.register)
router.get("/login", checkInvited, usersController.login)
router.post("/login", usersController.loginProcess)
router.get('/register', usersController.register);
router.get('/registerOk', usersController.registerOk);

module.exports = router;
