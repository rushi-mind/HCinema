'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Theater extends Model {
    static associate(models) { }
  }
  Theater.init({
    _id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    seats: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'theaters',
    timestamps: false,
    modelName: 'Theater',
  });
  return Theater;
};