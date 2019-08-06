"use strict";
import moment from "moment";
import faker from "faker";
import uuid from "uuid/v4";
import { Agent, Customer, sequelize } from "../models";
import { defaultRoles } from "../../config/constant";

// generate createdDate and updateDate
const createdAt = moment().format();
const updatedAt = createdAt;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const agent = await Agent.findOne({
      where: {
        role: defaultRoles.SECTOR_AGENT
      }
    });
    const customer = await Customer.findOne({ order: sequelize.random() });

    return await queryInterface.bulkInsert(
      "Paiements",
      [
        {
          id: uuid(),
          billNumber: faker.finance.iban(),
          amount: faker.finance.amount(),
          dueMount: "January",
          idAgent: agent.id,
          idCustomer: customer.id,
          createdAt,
          updatedAt
        },
        {
          id: uuid(),
          billNumber: faker.finance.iban(),
          amount: faker.finance.amount(),
          dueMount: "February",
          idAgent: agent.id,
          idCustomer: customer.id,
          createdAt,
          updatedAt
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Paiements", null, {});
  }
};
