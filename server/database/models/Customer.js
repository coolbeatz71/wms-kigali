"use strict";
export default (sequelize, DataTypes) => {
  const Customer = sequelize.define(
    "Customer",
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
  Customer.associate = models => {
    Customer.belongsTo(models.Location, {
      foreignKey: "idLocation",
      targetKey: "id"
    });

    Customer.hasMany(models.Paiement, {
      foreignKey: "idCustomer",
      sourceKey: "id"
    });
  };

  return Customer;
};
