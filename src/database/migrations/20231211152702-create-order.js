'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      total: {
        type: Sequelize.INTEGER,
        defaultValue : 0
      },
      userId: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName :'Users'
          }
        },
        onDelete : 'cascade'
      },
      statusID: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName :'Statuses'
          }
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Orders');
  }
};