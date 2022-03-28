'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    static associate(models) {}
  }
  Movie.init({
    _id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }, 
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fullTitle: {
      type: DataTypes.STRING
    },
    year: {
      type: DataTypes.INTEGER
    },
    image: {
      type: DataTypes.STRING
    },
    crew: {
      type: DataTypes.TEXT
    },
    imDbRating: {
      type: DataTypes.FLOAT
    },
    imDbRatingCount: {
      type: DataTypes.BIGINT
    },
    releaseStatus: {
      type: DataTypes.BOOLEAN
    },
    trailer: {
      type: DataTypes.STRING
    },
    dimension: {
      type: DataTypes.BOOLEAN
    }
  }, {
    sequelize,
    modelName: 'Movie',
    tableName: 'movies',
    timestamps: false
  });
  return Movie;
};