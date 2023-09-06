const express = require('express');
const productsController = require('../controllers/productsController');
const upload = require('../middlewares/upload');
const router = express.Router();

router.get('/detail/:id', productsController.detail);

router.get('/edit/:id', productsController.edit);
router.put('/update/:id',upload.array('images'), productsController.update);

router.get('/add', productsController.add);

router.delete('/removeProducts/:id', productsController.remove);

router.post('/add', upload.array('images'),productsController.create)
module.exports = router;