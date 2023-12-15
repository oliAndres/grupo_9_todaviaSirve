const express = require('express');
const categoryController = require('../controllers/categoryController');
const uploadCategory = require('../middlewares/uploadCategory');
const router = express.Router();

// /categories
router.get('/', categoryController.index);

router.get('/add',categoryController.add)
router.post('/add',uploadCategory.single('image'),categoryController.create)

router.get('/edit/:id', categoryController.edit)
router.put('/update/:id',uploadCategory.single('image'), categoryController.update)

router.delete('/remove/:id',categoryController.delete)


 
  //Rutas exigidas para la creación del CRUD
  /*.get("/category", categoryController.add);*/
  /*.post("/category/create", upload.single('image'), create)
 
  .put("/category/update/:id", upload.single('image'), update)
 
  .delete("/category/delete/:id", destroy)*/
  

 


module.exports = router;
