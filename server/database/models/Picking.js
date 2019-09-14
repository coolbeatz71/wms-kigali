"use strict";
export default (sequelize, DataTypes) => {
  const Picking = sequelize.define(
    "Picking",
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID
      },
      isValidated: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      idPaiement: {
        type: DataTypes.UUIDV4, // the Paiement of the picking
        allowNull: false
      },
      idAgent: {
        type: DataTypes.UUIDV4, // the Agent who can validate the picking
        allowNull: true
      }
    },
    {}
  );
  Picking.associate = models => {
    Picking.belongsTo(models.Paiement, {
      foreignKey: "idPaiement",
      targetKey: "id"
    });

    Picking.belongsTo(models.Agent, {
      foreignKey: "idAgent",
      targetKey: "id"
    });
  };

  return Picking;
};
