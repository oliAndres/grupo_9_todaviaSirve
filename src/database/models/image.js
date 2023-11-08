'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    static associate(models) {
      // Define la relación entre Image y Product.
      Image.belongsTo(models.Product, {
        foreignKey: 'productId', // Nombre de la clave externa en la tabla Image
        as: 'images', // Un alias para la relación (puedes elegir el que desees)
      });
    }
  }

  Image.init({
    name: DataTypes.STRING,
    main: DataTypes.BOOLEAN,
    productId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Image',
  });
  return Image;
};