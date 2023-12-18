const db = require("../../database/models");

const calculateTotal = (req) => {
  req.session.cart.total = req.session.cart.products
  .map(({price, discount, quantity}) => (price - price * discount / 100) * quantity)
  .reduce((a, b) => a + b, 0);
}

const getCart = async (req, res) => {
  try {
    if (!req.session.cart) {
      let error = new Error("Debe loguearse para comprar");
      error.status = 404;
      throw error;
    }

    return res.status(200).json({
      ok: true,
      data: req.session.cart,
    });
  } catch (error) {
    return res.status(error.status || 500).json({
      ok: false,
      msg: error.message || "Upss, hubo un error :(",
    });
  }
};

const addItemToCart = async (req, res) => {
  try {
    if (!req.session.cart) {
      let error = new Error("Debe loguearte para comprar");
      error.status = 404;
      throw error;
    }

    const { quantity, product: id } = req.body;

    const { name, price, discount, images } = await db.Product.findByPk(id, {
      include: ["images"],
    });

    let newProduct = {
      id,
      name,
      price,
      discount,
      image: images.find((image) => image.main).name,
      quantity: +quantity || 1,
    };

    if (req.session.cart.products.map((product) => product.id).includes(id)) {
      
      req.session.cart.products = req.session.cart.products.map((product) => {
        if (product.id === id) {
          ++product.quantity;
        }
        return product;
      });

      /* base de datos */

      await db.Item.update(
        {

          quantity : req.session.cart.products.find(product => product.id === +id).quantity

        },
        {
          where : {
            orderId : req.session.cart.orderId,
            productId : id
          }
        }
      )

    } else {
      req.session.cart.products.push(newProduct);

      await db.Item.create({
        orderId : req.session.cart.orderId,
        productId : id,
        quantity : 1
      })
    }

    calculateTotal(req)

    return res.status(200).json({
      ok: true,
      data: req.session.cart,
      msg : 'Producto agregado exitosamente'
    });
  } catch (error) {
    console.log(error);
    return res.status(error.status || 500).json({
      ok: false,
      data: null,
      msg: error.message || "Upss, hubo un error :(",
    });
  }
};

const removeItemToCart = async (req, res) => {
  try {
    if (!req.session.cart) {
      let error = new Error("Debe loguearte para comprar");
      error.status = 404;
      throw error;
    }

    const { product: id } = req.query;

    req.session.cart.products = req.session.cart.products.map((product) => {
      if (product.id === +id && product.quantity > 1) {
        --product.quantity;
      }
      return product;
    });
    
    calculateTotal(req)

    /* base de datos */

    await db.Item.update(
      {

        quantity : req.session.cart.products.find(product => product.id == +id).quantity

      },
      {
        where : {
          orderId : req.session.cart.orderId,
          productId : id
        }
      }
    )


    return res.status(200).json({
      ok: true,
      data: req.session.cart,
      msg : 'Producto eliminado exitosamente'
    });
  } catch (error) {
    console.log(error);
    return res.status(error.status || 500).json({
      ok: false,
      msg: error.message || "Upss, hubo un error :(",
    });
  }
};

const deleteItemToCart = async (req,res) => {
  try {

    if (!req.session.cart) {
      let error = new Error("Debe loguearte para comprar");
      error.status = 404;
      throw error;
    }

    const { product: id } = req.query;

    req.session.cart.products = req.session.cart.products.filter(product => product.id !== +id)

    calculateTotal(req)

    /* base de datos */

    await db.Item.destroy(
      {
        where : {
          orderId : req.session.cart.orderId,
          productId : id
        }
      }
    )

  return res.status(200).json({
    ok: true,
    data: req.session.cart,
    msg : 'Producto eliminado exitosamente'
  });
    
  } catch (error) {
    console.log(error);
    return res.status(error.status || 500).json({
      ok: false,
      msg: error.message || "Upss, hubo un error :(",
    });
  }
};

const clearCart = async (req,res) => {
  try {

    if (!req.session.cart) {
      let error = new Error("Debe loguearte para comprar");
      error.status = 404;
      throw error;
    };

    req.session.cart.products = [];

    calculateTotal(req);

      /* base de datos */

      await db.Item.destroy(
        {
          where : {
            orderId : req.session.cart.orderId,
          }
        }
      )

    return res.status(200).json({
      ok: true,
      data: req.session.cart,
      msg : 'Carrito vaciado con éxito'
    });
    
  } catch (error) {
    console.log(error);
    return res.status(error.status || 500).json({
      ok: false,
      msg: error.message || "Upss, hubo un error :(",
    });
  }
}

module.exports = {
  getCart,
  addItemToCart,
  removeItemToCart,
  deleteItemToCart,
  clearCart
};
