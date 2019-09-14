"use strict";
import moment from "moment";
import faker from "faker";
import uuid from "uuid/v4";

// generate createdDate and updateDate
const createdAt = moment().format();
const updatedAt = createdAt;

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "DustBins",
      [
        {
          id: uuid(),
          dustBinNumber: faker.finance.iban(),
          createdAt,
          updatedAt
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("DustBins", null, {});
  }
};
