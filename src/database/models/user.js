'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.Role,{
        as : 'role',
        foreignKey : 'roleId'
      }),
      User.belongsTo(models.Address,{
        as : 'address',
        foreignKey : 'addressId'
      });
      User.belongsToMany(models.Product, {
        as : 'products',
        through : 'Carts',
        foreignKey : 'userId',
        otherKey : 'productId'
      })
    }
  }
  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique : true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    birthdate: DataTypes.DATE,
    avatar: DataTypes.STRING,
    addressId: DataTypes.INTEGER,
    roleId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};