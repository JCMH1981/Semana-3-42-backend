'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => 
  {
    return queryInterface.bulkInsert('Users', 
      [{
        name: 'Juan',
        email: 'jcmhsoftware@gmail.com',
       },

       down: async (queryInterface, Sequelize) => 
       {
        password: '$2y$08$ZjYFNjUHC.ubWD3sferbme7HfGqUYq9NV5kSL7CTHPMKG6fwd8diC', 
        createdAt: new Date(), 
        updatedAt: new Date()
        }
      ]);
  },

  down: async(queryInterface, Sequelize) => 
  {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
