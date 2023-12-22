const { getCart, addItemToCart, removeItemToCart, deleteItemToCart, clearCart } = require('../controllers/APis/cartApiController')
const { listProducts, showProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/apiProductsController')
// import checkEmail from('../controllers/apiUsersController')
// import { getCategoriesWithProducts, getCategories } from('../controllers/apiCategoriesController')
const { totalProductInDB, getAllProducts } = require('../controllers/APis/productsApiController')

const { check } = require('express-validator')
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

    /* users*/
    // .get('/check-email',checkEmail)
    
    // categories
    // .get('/categories/products', getCategoriesWithProducts)
    // .get('/categories', getCategories)

    .delete('/products/:id',deleteProduct)
    .get('/products/count',totalProductInDB)
    .get('/products',getAllProducts)

module.exports = router
