"use strict";
export default (sequelize, DataTypes) => {
  const Admin = sequelize.define(
    "Admin",
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID
      },
      slug: {
        type: DataTypes.STRING,
        allowNull: false
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
  Admin.associate = models => {
    Admin.belongsTo(models.Location, {
      foreignKey: "idLocation",
      targetKey: "id"
    });
  };

  return Admin;
};
