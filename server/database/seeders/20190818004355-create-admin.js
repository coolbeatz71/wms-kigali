"use strict";
import moment from "moment";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import faker from "faker";
import uuid from "uuid/v4";
import createSlug from "../../helpers/createSlug";
import { Location, sequelize } from "../models";

dotenv.config();

// generate encryoted password
const plainPwd = process.env.ADMIN_PASSWORD;
const password = bcrypt.hashSync(plainPwd, bcrypt.genSaltSync(8));

// generate createdDate and updateDate
const createdAt = moment().format();
const updatedAt = createdAt;

const firstName = faker.name.firstName();
const lastName = faker.name.lastName();

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const location = await Location.findOne({ order: sequelize.random() });

    return await queryInterface.bulkInsert(
      "Admins",
      [
        {
          id: uuid(),
          slug: createSlug(`${firstName} ${lastName}`),
          firstName,
          lastName,
          phoneNumber: faker.phone.phoneNumberFormat(),
          isDisabled: false,
          isLoggedIn: false,
          password,
          idLocation: location.id,
          createdAt,
          updatedAt
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Admins", null, {});
  }
};
