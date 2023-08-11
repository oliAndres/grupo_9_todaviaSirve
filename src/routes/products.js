const express = require('express');
const productsController = require('../controllers/productsController');
const router = express.Router();

router.get('/detail', productsController.detail);

module.exports = router;