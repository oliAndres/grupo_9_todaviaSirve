const express = require('express');
const usersController = require('../controllers/usersController');
const router = express.Router();

/* GET users listing. */
router.get('/login', usersController.login);
router.get('/register', usersController.register);
router.get('/registerOk', usersController.registerOk);

module.exports = router;
