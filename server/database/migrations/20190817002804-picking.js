"use strict";

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("Pickings", {
      id: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      isValidated: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      idPaiement: {
        type: Sequelize.UUID, // the Paiement of the picking
        allowNull: false
      },
      idAgent: {
        type: Sequelize.UUID // the Agent who can validate the picking
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }),

  down: (queryInterface, Sequelize) => queryInterface.dropTable("Pickings")
};
