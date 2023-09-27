const express = require('express');
const productsController = require('../controllers/productsController');
const upload = require('../middlewares/upload');
const userCheck = require('../middlewares/userCheck');
const adminCheck = require('../middlewares/adminCheck');
const router = express.Router();

router.get('/detail/:id', productsController.detail);

router.get('/edit/:id',adminCheck, productsController.edit);
router.put('/update/:id',upload.array('images'), productsController.update);

router.get('/add',userCheck, productsController.add);

router.delete('/removeProducts/:id', productsController.remove);

router.post('/add', upload.array('images'),productsController.create)
module.exports = router;