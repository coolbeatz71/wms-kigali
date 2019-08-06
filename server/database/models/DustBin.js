"use strict";
export default (sequelize, DataTypes) => {
  const DustBin = sequelize.define(
    "DustBin",
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID
      },
      dustBinNumber: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {}
  );

  return DustBin;
};
