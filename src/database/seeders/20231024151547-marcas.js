'use strict';

const marcas = [
  "Smeg",
  "Atma",
  "Peabody",
  "Black & Decker",
  "JBL",
  "Philips",
  "Sthil",
  "Sony",
  "Samsung",
  "iPhone",
  "Levis",
  "Philco"
]

const brandsDB = marcas.map((brand) => {
  return {
    name : brand,
    image : null,
    createdAt : new Date,
    updatedAt : new Date
  }
})


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('Brands', brandsDB, {});
    
  },

  async down (queryInterface, Sequelize) {

      await queryInterface.bulkDelete('Brands', null, {});
       }
};
