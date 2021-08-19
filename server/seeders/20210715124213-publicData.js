'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'PublicData',
      [
        {
          name: 'Somos Más',
          image:
            'https://cdn-sp.radionacional.com.ar/wp-content/uploads/2017/04/ONG.png',
          phone: '1160112988',
          address: 'Address 1234, 0000 example',
          welcomeText: 'Welcome text example',
          facebook: 'https://www.facebook.com/Somos_Más',
          linkedin: 'https://www.linkedin.com/in/Somos_Más/',
          instagram: 'https://www.instagram.com/SomosMás',
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
