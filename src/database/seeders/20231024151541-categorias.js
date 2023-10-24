'use strict';

const categoriesJSON = require('../../data/categories.json');

const categoriesDB = categoriesJSON.map(({name}) => {
  return {
    name,
    image : null,
    createdAt : new Date,
    updatedAt : new Date
  }
})


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('Categories', categoriesDB, {});
    
  },

  async down (queryInterface, Sequelize) {

      await queryInterface.bulkDelete('Categories', null, {});
       }
};
