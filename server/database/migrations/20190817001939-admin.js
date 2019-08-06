"use strict";

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("Admins", {
      id: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      slug: {
        type: Sequelize.STRING,
        allowNull: false
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      phoneNumber: {
        type: Sequelize.STRING
      },
      isDisabled: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      isLoggedIn: {
        type: Sequelize.BOOLEAN
      },
      password: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
          min: 8
        }
      },
      idLocation: Sequelize.UUID,
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }),

  down: (queryInterface, Sequelize) => queryInterface.dropTable("Admins")
};
