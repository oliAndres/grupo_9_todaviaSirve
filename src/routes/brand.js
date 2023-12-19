const express = require('express');
const brandController = require('../controllers/brandController');

const router = express.Router();

router.get('/', brandController.index);
router.get('/add',brandController.add);
router.post('/add',brandController.create);

module.exports = router;