'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Activities',
      [
        {
          name: 'Actividad 1',
          image:
            'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
          content: 'Este es el contenido de la actividad 1',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Actividad 2',
          image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
          content: 'Este es el contenido de la actividad 2',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Actividad 3',
          image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
          content: 'Este es el contenido de la actividad 3',
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
