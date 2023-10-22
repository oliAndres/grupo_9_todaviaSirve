'use strict';
/** @type {import('DataTypes-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('Carts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      quantity: {
        type: DataTypes.INTEGER,
        defaultValue : 1
      },
      userId: {
        type: DataTypes.INTEGER,
        references : {
          model : {
            tableName : 'Users'
          }
        },
        onDelete : 'cascade'
      },
      productId: {
        type: DataTypes.INTEGER,
        references : {
          model : {
            tableName : 'Products'
          }
        },
        onDelete : 'cascade'   
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('Carts');
  }
};