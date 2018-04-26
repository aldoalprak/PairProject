'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('customers', [
        {
        name: 'John Doe',
        username: 'john123',
        password:'1234abcd',
        tinggi_badan:170,
        berat_badan:65,
        createdAt:new Date(),
        updatedAt:new Date()
      }
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
