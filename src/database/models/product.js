'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.Category,{
        as : 'category',
        foreignKey : 'categoryId'
      });
      Product.belongsToMany(models.User, {
        as : 'users',
         through : 'cart',
         foreignKey : 'userId',
         otherKey : 'productId'
      });

      Product.hasMany(models.Image, {
        as : 'images',
        foreignKey : 'productId'
      })
    }
  }
  Product.init({
    name: {
      type : DataTypes.STRING, 
      allowNull : false   
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull : false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull : false
    },
    discount: {
      type: DataTypes.INTEGER,
      defaultValue : 0
    },
    brand: DataTypes.STRING,
    categoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};