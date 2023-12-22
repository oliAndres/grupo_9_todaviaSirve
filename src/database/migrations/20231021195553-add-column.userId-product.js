'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Agregar la columna 'userId' a la tabla 'product'
    await queryInterface.addColumn('products', 'userId', {
      type: Sequelize.INTEGER,
      references: {
        model: {
          tableName: 'users', // Asegúrate de que 'user' sea el nombre correcto de la tabla 'user'
        },
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
  },

  async down(queryInterface, Sequelize) {
    // Eliminar la columna 'userId' de la tabla 'product'
    await queryInterface.removeColumn('products', 'userId');
  }
};
