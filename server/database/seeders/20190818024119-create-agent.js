"use strict";
import moment from "moment";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import faker from "faker";
import uuid from "uuid/v4";
import createSlug from "../../helpers/createSlug";
import { Location } from "../models";
import { defaultRoles } from "../../config/constant";

dotenv.config();

// generate encryoted password
const plainPwd = process.env.AGENT_PASSWORD;
const password = bcrypt.hashSync(plainPwd, bcrypt.genSaltSync(8));

// generate createdDate and updateDate
const createdAt = moment().format();
const updatedAt = createdAt;

const saFirstName = faker.name.firstName();
const saLastName = faker.name.lastName();
const wpFirstName = faker.name.firstName();
const wpLastName = faker.name.lastName();

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const locations = await Location.findAll();

    return await queryInterface.bulkInsert(
      "Agents",
      [
        {
          id: uuid(),
          slug: createSlug(`${saFirstName} ${saLastName}`),
          accountNumber: `SA-${faker.finance.account()}`,
          firstName: saFirstName,
          lastName: saLastName,
          role: defaultRoles.SECTOR_AGENT,
          phoneNumber: faker.phone.phoneNumberFormat(),
          isDisabled: false,
          isLoggedIn: false,
          picture: faker.image.avatar(),
          password,
          idLocation: locations[0].id,
          createdAt,
          updatedAt
        },
        {
          id: uuid(),
          slug: createSlug(`${wpFirstName} ${wpLastName}`),
          accountNumber: `WP-${faker.finance.account()}`,
          firstName: wpFirstName,
          lastName: wpLastName,
          role: defaultRoles.WASTE_PICKER,
          phoneNumber: faker.phone.phoneNumberFormat(),
          isDisabled: false,
          isLoggedIn: false,
          picture: faker.image.avatar(),
          password,
          idLocation: locations[1].id,
          createdAt,
          updatedAt
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Agents", null, {});
  }
};
