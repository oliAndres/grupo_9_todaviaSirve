'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.belongsTo(models.Brand, {
        as: 'brand',
        foreignKey: 'brandId'
      });

      Product.belongsTo(models.Category, {
        as: 'category',
        foreignKey: 'categoryId'
      });

      Product.belongsToMany(models.User, {
        as: 'users',
        through: 'Carts',
        foreignKey: 'productId',
        otherKey: 'userId'
      });

      Product.hasMany(models.Image, {
        as: 'images',
        foreignKey: 'productId'
      });

      Product.belongsTo(models.User, {
        as: 'user',
        foreignKey: 'userId'
      });
    }
  }

  Product.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    discount: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    brandId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Product',
  });

  return Product;
};
