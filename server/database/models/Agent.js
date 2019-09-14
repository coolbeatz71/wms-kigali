"use strict";
export default (sequelize, DataTypes) => {
  const Agent = sequelize.define(
    "Agent",
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID
      },
      slug: {
        type: DataTypes.STRING,
        allowNull: false
      },
      accountNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      firstName: {
        type: DataTypes.STRING
      },
      lastName: {
        type: DataTypes.STRING
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false
      },
      phoneNumber: {
        type: DataTypes.STRING
      },
      isDisabled: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      isLoggedIn: {
        type: DataTypes.BOOLEAN
      },
      picture: {
        type: DataTypes.STRING
      },
      password: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          min: 8
        }
      },
      idLocation: DataTypes.UUIDV4
    },
    {}
  );
  Agent.associate = models => {
    Agent.belongsTo(models.Location, {
      foreignKey: "idLocation",
      targetKey: "id"
    });

    Agent.hasMany(models.Paiement, {
      foreignKey: "idAgent",
      sourceKey: "id"
    });

    Agent.hasMany(models.Picking, {
      foreignKey: "idAgent",
      sourceKey: "id"
    });
  };

  return Agent;
};
