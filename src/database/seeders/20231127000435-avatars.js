'use strict';

const avatares = [
  "Andres.jpg",
  "Christian.jpg",
  "federico.jpg",
  "Melitza.jpg",
  "user1.jpg",
  "user2.jpg",
  "user3.jpg"
]

const avatarsDB = avatares.map((avatar) => {
  return {
    name : avatar,
    createdAt : new Date,
    updatedAt : new Date
  }
})

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
          
      await queryInterface.bulkInsert('Avatars', avatarsDB, {});
    
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('Avatars', null, {});
     
  }
};
