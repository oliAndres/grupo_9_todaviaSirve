const { listProducts, showProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/apiProductsController')

const router = require('express').Router()

/* apis*/ 

/* productos */
router
    .get('/products', listProducts)
    .get('/products/:id',showProduct)
    .post('/products',createProduct)
    .put('/products/:id',updateProduct)
    .delete('/products/:id',deleteProduct)


/* usuarios*/


/* categorias*/

module.exports = router