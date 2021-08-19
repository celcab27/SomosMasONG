'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Entry extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Entry.belongsToMany(models.Category, { through: 'category_entry' });
    }
  }
  Entry.init(
    {
      name: DataTypes.STRING,
      content: DataTypes.STRING,
      image: DataTypes.STRING,
      categoryId: DataTypes.INTEGER,
      type: DataTypes.STRING,
      deletedAt: DataTypes.DATEONLY,
      createdAt: DataTypes.DATEONLY
    },
    {
      sequelize,
      modelName: 'Entry',
      paranoid: true,
    }
  );
  return Entry;
};
