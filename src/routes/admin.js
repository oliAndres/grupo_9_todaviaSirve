const express = require('express');
const adminController = require('../controllers/adminController');
const router = express.Router();


router.get('/', adminController.admin);


module.exports = router;
