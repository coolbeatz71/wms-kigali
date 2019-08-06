"use strict";
import moment from "moment";
import dotenv from "dotenv";
import faker from "faker";
import uuid from "uuid/v4";

dotenv.config();

// generate createdDate and updateDate
const createdAt = moment().format();
const updatedAt = createdAt;

/**
 * create a certain number of random locations using
 * faker
 * @param {integer} count
 */
const createLocation = count => {
  const locations = [];
  for (let i = 0; i < count; i++) {
    const value = {
      id: uuid(),
      province: faker.address.state(),
      district: faker.address.city(),
      sector: faker.address.county(),
      cell: faker.address.streetName(),
      village: faker.address.streetAddress(),
      createdAt: faker.date.recent(90),
      updatedAt
    };

    locations.push(value);
  }

  return locations;
};

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Locations", createLocation(10), {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Locations", null, {});
  }
};
