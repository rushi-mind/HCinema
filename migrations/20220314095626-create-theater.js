'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('theaters', {
      _id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      seats: {
        type: Sequelize.TEXT,
        allowNull: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('theaters');
  }
};