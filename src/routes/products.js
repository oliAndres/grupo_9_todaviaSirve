const express = require('express');
const productsController = require('../controllers/productsController');
const upload = require('../middlewares/upload');
const userCheck = require('../middlewares/userCheck');
const adminCheck = require('../middlewares/adminCheck');
const productEditValidator = require('../validations/productEditValidator');
const router = express.Router();

router.get('/detail/:id', productsController.detail);

router.get('/edit/:id', productsController.edit); 
router.put('/update/:id',upload.fields([
    {
        name : "image0",
    },
    {
        name : "image1",
    },
    {
        name : "image2",
    },
]),productEditValidator,productsController.update);

router.get('/add',userCheck, productsController.add);

router.get('/deleteProducts/:id', productsController.deleteProduct);
router.delete('/destroyProducts/:id', productsController.destroyProduct);

router.post('/add', upload.array('images'),productsController.create)

module.exports = router;