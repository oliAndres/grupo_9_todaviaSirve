'use strict';

const productsJSON = require('../../data/products.json');
const categories = require('../../data/categories.json')

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

const productsDB = productsJSON.map(({id, name, marca, price, description, category}) => {
  return {
    name,
    price,
    description,
    discount : 0,
    brandId : marcas.indexOf(marca) + 1,
    categoryId: categories.find(element => element.name === category ).id,
    createdAt : new Date,
    updatedAt : new Date
  }
})


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('Products', productsDB, {});
    
  },

  async down (queryInterface, Sequelize) {

      await queryInterface.bulkDelete('Products', null, {});
       }
};
