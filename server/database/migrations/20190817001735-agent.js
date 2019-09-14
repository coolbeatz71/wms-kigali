"use strict";

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("Agents", {
      id: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      slug: {
        type: Sequelize.STRING,
        allowNull: false
      },
      accountNumber: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      role: {
        type: Sequelize.STRING,
        allowNull: false
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
      picture: {
        type: Sequelize.STRING
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

  down: (queryInterface, Sequelize) => queryInterface.dropTable("Agents")
};
