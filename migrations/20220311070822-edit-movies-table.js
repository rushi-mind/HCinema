'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'movies', 'releaseStatus', { type: Sequelize.BOOLEAN }
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('movies', 'releaseStatus');
  }
};
