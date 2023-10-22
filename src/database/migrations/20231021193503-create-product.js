'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        type: DataTypes.STRING,
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
      brand: {
        type: DataTypes.STRING
      },
      categoryId: {
        type: DataTypes.INTEGER,        
        references : {
          model : {
            tableName : 'Categories'
          }
        },
        onDelete :'cascade'
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      deleteAt : {
        type : DataTypes.DATE
      }
    });
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('Products');
  }
};