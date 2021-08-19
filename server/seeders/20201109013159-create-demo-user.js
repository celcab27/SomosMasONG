'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          firstName: 'Admin',
          lastName: 'Eladmin',
          email: 'admin@mail.com',
          password: `${bcrypt.hashSync('123456', 10)}`,
          roleId: 1,
          image:
            'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Usuario',
          lastName: 'Eluser',
          email: 'user@mail.com',
          password: `${bcrypt.hashSync('123456', 10)}`,
          roleId: 2,
          image:
            'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
