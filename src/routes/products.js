const express = require('express');
const productsController = require('../controllers/productsController');
const router = express.Router();

router.get('/detail', productsController.detail);

router.get('/edit', productsController.edit); 

router.get('/new', productsController.new);

module.exports = router;