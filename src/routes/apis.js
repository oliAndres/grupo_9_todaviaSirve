const { getCart, addItemToCart, removeItemToCart, deleteItemToCart, clearCart } = require('../controllers/APis/cartApiController')
const { listProducts, showProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/apiProductsController')

const router = require('express').Router()

/* apis*/ 


router
    /* productos */
    .get('/products', listProducts)
    .get('/products/:id',showProduct)
    .post('/products',createProduct)
    .put('/products/:id',updateProduct)
    .delete('/products/:id',deleteProduct)


    /* carrito */
    .get('/cart', getCart)
    .post('/cart', addItemToCart)
    .delete('/cart',removeItemToCart)
    .delete('/cart/item', deleteItemToCart)
    .delete('/cart/all',clearCart)

    /* categorias*/

module.exports = router