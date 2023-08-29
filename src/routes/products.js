const express = require('express');
const productsController = require('../controllers/productsController');
const router = express.Router();

router.get('/detail', productsController.detail);

router.get('/edit/:id?', productsController.edit);
router.put('/update/:id', productsController.update);

router.get('/new', productsController.new);

module.exports = router;