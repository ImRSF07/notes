'use strict';

const UserModel = require('../../../models/user');

class AuthRepository {
  constructor(logger) {
    this.logger = logger;
  }

  async getUser(params, showHiddenFields = false) {
    return new Promise(async (resolve, reject) => {
      try {
        let user = await new UserModel().getUser(params);
        if (showHiddenFields) {
          user = user.toJSON({ hidden: [] });
        } else {
          user = user.serialize();
        }
        return resolve(user);
      } catch (error) {
        return reject(error);
      }
    });
  }

  async insertUser(payload) {
    return new Promise(async (resolve, reject) => {
      try {
        let savedUser;
        if (Array.isArray(payload)) {
          const userPromises = (user) =>
            new Promise(async (resolve) => {
              resolve(await new UserModel().createUser(user));
            });

          savedUser = await Promise.all(
            payload.map(async (user) => {
              return await userPromises(user);
            })
          );
        } else {
          savedUser = await new UserModel().createUser(payload);
        }
        return resolve(savedUser);
      } catch (error) {
        return reject(error);
      }
    });
  }

  async updateUser(col, param, data) {
    return new Promise(async (resolve, reject) => {
      try {
        const updatedUser = await new UserModel().updateUser(col, param, data);
        return resolve(updatedUser);
      } catch (error) {
        return reject(error);
      }
    });
  }
}

module.exports = AuthRepository;
