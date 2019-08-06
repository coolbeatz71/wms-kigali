"use strict";
export default (sequelize, DataTypes) => {
  const Location = sequelize.define(
    "Location",
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID
      },
      province: DataTypes.STRING,
      district: DataTypes.STRING,
      sector: DataTypes.STRING,
      cell: DataTypes.STRING,
      village: DataTypes.STRING
    },
    {}
  );

  Location.associate = models => {
    Location.hasMany(models.Customer, {
      foreignKey: "idLocation",
      sourceKey: "id"
    });

    Location.hasMany(models.Agent, {
      foreignKey: "idLocation",
      sourceKey: "id"
    });

    Location.hasMany(models.Admin, {
      foreignKey: "idLocation",
      sourceKey: "id"
    });
  };

  return Location;
};
