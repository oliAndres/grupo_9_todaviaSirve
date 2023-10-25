const db = require('../../database/models');

const create = async (req, res) => {
  try {
    const { brand, category, ...productData } = req.body;
    let brandId;
    let categoryId;

    if (brand) {
      const existeMarca = await db.Brand.findOne({
        where: { name: brand },
      });

      if (existeMarca) {
        brandId = existeMarca.id;
      } else {
        const newBrand = await db.Brand.create({
          name: brand,
        });
        brandId = newBrand.id;
      }
    } else {
      brandId = req.body.brandId;
    }

    const categoryInstance = await db.Category.findOne({
      where: { name: category },
    });

    if (categoryInstance) {
      categoryId = categoryInstance.id;
    }

    const product = await db.Product.create({
      ...productData,
      brandId,
      categoryId, 
    });
    console.log(req.files)

    if (req.files && req.files.length > 0) {
      for (let i = 0 ; i < req.files.length; i++) {
        await db.Image.create({
          name: req.files[i].filename,
          productId: product.id, 
          main: false, 
        });
      }
    }
    

    console.log(product);
    res.redirect('/admin');
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Error al crear el producto');
  }
};

module.exports = create;
