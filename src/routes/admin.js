const express = require('express');
const adminController = require('../controllers/adminController');
const adminCheck = require('../middlewares/adminCheck');
const router = express.Router();


router.get('/',adminCheck, adminController.admin);


module.exports = router;
