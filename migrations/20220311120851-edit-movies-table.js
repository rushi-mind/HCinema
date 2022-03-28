'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'movies', 'trailer', { type: Sequelize.STRING }
      ),
      queryInterface.addColumn(
        'movies', 'dimension', { type: Sequelize.BOOLEAN }
      )
    ]);
  },

  async down (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn('movies', 'trailer'),
      queryInterface.removeColumn('movies', 'dimension')
    ]);
  }
};
