const {existsSync, unlinkSync} = require('fs');
const db = require('../../database/models');
const { validationResult } = require('express-validator');

module.exports = (req,res) => {
    const errors = validationResult(req);

    if (errors.isEmpty()){

    const {name, brandId, price, categoryId, description} = req.body;

    db.Product.findByPk(req.params.id,{
        include : ['images']
    })
        .then(product => {
            db.Product.update(
                {
                    name : name.trim(),
                    brandId : brandId,
                    price,
                    categoryId : categoryId,
                    description
                },
                {
                    where : {
                        id : req.params.id
                    }
                }
            )
            .then(() => {
                //Cambia imagenes secundarias
                if(req.files.images){
                    product.images.filter(image => !image.main).forEach((image) => {
                        existsSync(`./public/images/productos/${image.file}`) && 
                        unlinkSync(`./public/images/productos/${image.file}`);
                    });

                    db.Image.destroy({
                        where : {
                            productId : req.params.id,
                            main : false
                        }
                    })
                    .then(() => {
                        const images = req.files.images.map(({filename}) => {
                            return {
                                name : filename,
                                main : false,
                                productId : product.id
                            }
                        })
                        db.Image.bulkCreate(images,{
                            validate : true
                        }).then(result => console.log(result))
                    })
                }
                
            })
            .catch(error => console.log(error))
            .finally(() => {
                return res.redirect("/admin");
            })
        })

    } else {
        const id = req.params.id;

        const product = db.Product.findByPk(id, {
            include : {
                all : true
            }
        });
        const categories = db.Product.findAll({
            order : ['name']
        });
        
        Promise.all([product, categories])
            .then(([product, categories]) => {
                return res.render('productEdit', {
                    categories,
                    ...product.dataValues,
                    errors: errors.mapped()
                });
            })
            .catch(error => console.log(error))
    }
}