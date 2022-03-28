'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.renameColumn('movies', 'imageURL', 'image');
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.renameColumn('movies', 'image', 'imageURL');
  }
};
