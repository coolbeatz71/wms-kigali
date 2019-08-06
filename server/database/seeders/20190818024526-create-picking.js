"use strict";
import moment from "moment";
import faker from "faker";
import uuid from "uuid/v4";
import { Agent, Paiement, sequelize } from "../models";
import { defaultRoles } from "../../config/constant";

// generate createdDate and updateDate
const createdAt = moment().format();
const updatedAt = createdAt;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const agent = await Agent.findOne({
      where: {
        role: defaultRoles.WASTE_PICKER
      }
    });
    const paiements = await Paiement.findAll();

    return await queryInterface.bulkInsert(
      "Pickings",
      [
        {
          id: uuid(),
          isValidated: true,
          idAgent: agent.id,
          idPaiement: paiements[0].id,
          createdAt,
          updatedAt
        },
        {
          id: uuid(),
          isValidated: false,
          idPaiement: paiements[1].id,
          createdAt,
          updatedAt
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Pickings", null, {});
  }
};
