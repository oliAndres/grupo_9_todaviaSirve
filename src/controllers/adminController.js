const db = require("../database/models")
module.exports = {
    admin: async (req, res) => {
        try {
            const {name,price,description,brand} = await db.Product.findAll();
            res.render('admin', { products });
        } catch (error) {
            console.error('Error al recuperar productos:', error);
            res.status(500).json({ error: 'Error interno del servidor' });
        }
    }
};
// module.exports = {
//     admin: (req, res) => {
//         db.Product.findAll()
//             .then(products => {
//                 res.render('admin.ejs', {products})
//             })
    
//         }
    
// } 
