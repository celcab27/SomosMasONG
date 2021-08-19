'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Slides', [
      {
        imageUrl: 'someUrl.jpg',
        text: 'Some text for slides',
        order: 1,
        organizationId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imageUrl: 'someUrl.jpg',
        text: 'Some text for slides',
        order: 2,
        organizationId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imageUrl: 'someUrl.jpg',
        text: 'Some text for slides',
        order: 3,
        organizationId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
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
