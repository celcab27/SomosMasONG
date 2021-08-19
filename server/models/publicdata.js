'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PublicData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  PublicData.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    welcomeText: DataTypes.STRING,
    facebook: DataTypes.STRING,
    linkedin: DataTypes.STRING,
    instagram: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'PublicData',
  });
  return PublicData;
};