const express = require('express');
const brandController = require('../controllers/brandController');
const uploadBrand = require('../middlewares/uploadBrand')

const router = express.Router();

router.get('/', brandController.index);
router.get('/add',brandController.add);
router.post('/add',uploadBrand.single('image'),brandController.create);
router.get('/edit/:id', brandController.edit)
router.put('/update/:id',uploadBrand.single('image'), brandController.update)

router.delete('/remove/:id',brandController.delete)

module.exports = router;