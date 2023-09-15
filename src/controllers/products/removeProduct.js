const { readJSON, writeJSON } = require('../../data');

module.exports = (req, res) => {
  const products = readJSON('products.json');

  const productsModify = products.filter(product => product.id !== parseInt (req.params.id));

  writeJSON(productsModify, 'products.json');

  return res.redirect("/admin");
};
