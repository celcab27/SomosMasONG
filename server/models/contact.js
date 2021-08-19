'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Contact extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Contact.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      message: DataTypes.STRING(2048)
    },
    {
      sequelize,
      modelName: 'Contact'
    }
  );
  return Contact;
};

/*Agregar esto en sequelize, modelName y migrar de nuevo.
paranoid: true,
timestamps: true, */
