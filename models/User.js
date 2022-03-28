'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {

  class User extends Model {
    static associate(models) {
      // define association here
    }
  }
  User.init({
    _id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }, 
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    profileImage: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    tableName: 'users',
    timestamps: false,
    modelName: 'User',
  });
  return User;
};