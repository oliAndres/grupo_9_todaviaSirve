'use strict';

const productsJSON = require('../../data/products.json');

const imagesDB = []

productsJSON.forEach(({id,images}) => {
  images.forEach((image,index) => {
    imagesDB.push({
      name : image,
      main : index === 0 ? true : false,
      productId : id,
      createdAt : new Date,
      updatedAt : new Date,
    })
  })
})


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('Images', imagesDB, {});
    
  },

  async down (queryInterface, Sequelize) {

      await queryInterface.bulkDelete('Images', null, {});
       }
};
