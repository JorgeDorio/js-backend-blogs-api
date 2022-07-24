'use strict';

const Category = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    name: DataTypes.STRING
  }, {
    tableName: 'Categories',
    timestamps: false
  })

  return Category;
}
module.exports = Category;
