const express = require('express');
const productsController = require('../controllers/productsController');
const upload = require('../middlewares/upload');
const router = express.Router();

router.get('/detail/:id', productsController.detail);

router.get('/edit/:id', productsController.edit);
router.put('/update/:id',upload.array('images'), productsController.update);

router.get('/add', productsController.add);
router.post('/add', productsController.create)
module.exports = router;