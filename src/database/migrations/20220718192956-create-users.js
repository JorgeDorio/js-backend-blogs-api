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
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(126).BINARY,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING(126).BINARY,
        allowNull: false,
      },
      image: {
        type: Sequelize.STRING(126).BINARY,
        allowNull: false,
      },
    });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};
