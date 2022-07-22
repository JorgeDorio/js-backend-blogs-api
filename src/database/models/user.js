'use strict';

const User = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    timestamps: false,
  })

  User.associate = (models) => {
    User.hasMany(models.BlogPost,
      { foreignKey: 'id' })
  }
  return User;
};

module.exports = User
