'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      displayName: {
        type: Sequelize.STRING(126).BINARY,
        primaryKey: true
      },
      email: {
        type: Sequelize.STRING(126).BINARY,
        primaryKey: true
      },
      password: {
        type: Sequelize.STRING(126).BINARY,
        primaryKey: true
      },
      image: {
        type: Sequelize.STRING(126).BINARY,
        primaryKey: true
      },
    });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};
