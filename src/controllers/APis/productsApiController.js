const db = require("../../database/models");
const totalProductInDB = (req, res) => {
  db.Product.findAll()
    .then((total) => {
      return res.status(200).json({
        ok: true,
        data: total.length, 
      });
    })
    .catch((error) => {
      return res.status(error.status || 500).json({
        ok: false,
        msg: error.message || "Upss, hubo un error",
      });
    });
};


const getAllProducts = async (req, res) => {
  try {
    const products = await db.Product.findAll({
      include: ["category", "images"],
    });

    return res.status(200).json({
      ok: true,
      data: products,
    });
  } catch (error) {
    return res.status(error.status || 500).json({
      ok: false,
      msg: error.message || "Upss, hubo un error",
    });
  }
};

const deleteProduct = async (req,res) => {
  try {
    await db.Product.destroy({
      where : {
        id : req.params.id
      }
    })
    return res.status(200).json({
      ok: true,
      data: null,
      msg: "Producto eliminado con éxito",
    });
  } catch (error) {
    return res.status(error.status || 500).json({
      ok: false,
      msg: error.message || "Upss, hubo un error",
      data: null,
    });
  }
}

module.exports = {
  totalProductInDB,
  getAllProducts,
  deleteProduct,

};
