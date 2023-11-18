"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Addresses",
      [
        {
          city: 'san miguel',
          province: 'Buenos Aires',
          street: 'Pavon',
          createdAt : new Date,
          updatedAt : new Date,
        },
        {
          city: 'Hurlingham',
          province: 'Buenos Aires',
          street: 'Dorrego',
          createdAt : new Date,
          updatedAt : new Date,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Addresses", null, {});
  },
};
