const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const loginValidator = require("../validations/loginValidator");
const userCheck = require('../middlewares/userCheck');
const userLoaded = require('../middlewares/userLoaded');
const upload = require('../middlewares/upload');


/* GET users listing. */
router.get("/register",userLoaded, usersController.register)
router.get("/login",userLoaded,  loginValidator, usersController.login)
router.post("/login", usersController.loginProcess)
router.get('/registerOk', usersController.registerOk);
router.get('/logOut', usersController.logOut);
router.get('/profile',userCheck, usersController.profile);
router.put('/update/:id',upload.single('image'), usersController.update);

module.exports = router;
