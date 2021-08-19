'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Entries',
      [
        {
          name: 'Demo',
          content: 'Demo',
          image:
            'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
          categoryId: 1,
          type: 'Event',
          deletedAt: null,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Demo',
          content: 'Demo',
          image:
            'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
          categoryId: 1,
          type: 'news',
          deletedAt: null,
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
