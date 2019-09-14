"use strict";

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("Paiements", {
      id: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      billNumber: {
        type: Sequelize.STRING,
        allowNull: false
      },
      amount: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      dueMount: {
        type: Sequelize.STRING,
        allowNull: false
      },
      idAgent: {
        type: Sequelize.UUID, // the agent who registered the paiement
        allowNull: false
      },
      idCustomer: {
        type: Sequelize.UUID, // the customer who paid
        allowNull: false
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

  down: (queryInterface, Sequelize) => queryInterface.dropTable("Paiements")
};
