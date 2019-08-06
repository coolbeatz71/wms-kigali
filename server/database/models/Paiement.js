"use strict";
export default (sequelize, DataTypes) => {
  const Paiement = sequelize.define(
    "Paiement",
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID
      },
      billNumber: {
        type: DataTypes.STRING,
        allowNull: false
      },
      amount: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      dueMount: {
        type: DataTypes.STRING,
        allowNull: false
      },
      idAgent: {
        type: DataTypes.UUIDV4, // the agent who registered the paiement
        allowNull: false
      },
      idCustomer: {
        type: DataTypes.UUIDV4, // the customer who paid
        allowNull: false
      }
    },
    {}
  );
  Paiement.associate = models => {
    Paiement.belongsTo(models.Agent, {
      foreignKey: "idAgent",
      targetKey: "id"
    });

    Paiement.belongsTo(models.Customer, {
      foreignKey: "idCustomer",
      targetKey: "id"
    });

    Paiement.hasOne(models.Picking, {
      foreignKey: "idPaiement",
      sourceKey: "id"
    });
  };

  return Paiement;
};
