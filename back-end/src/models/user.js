'use strict';
const logger = require('turbo-logger').createStream({});
const _ = require('lodash');

const bookshelf = require('../bookshelf');

const { DatabaseError } = require('../utils/errors');

let User = bookshelf.Model.extend({
  tableName: 'users',
  hasTimestamps: true,
  hidden: ['password'],

  // create user
  createUser: (payload) => {
    return new Promise(async (resolve, reject) => {
      logger.log('::::::::Saving user data...........');
      return await new User()
        .save(payload, { method: 'insert', debug: true })
        .then(async (data) => {
          logger.log('::::::::User data saved successfully.............');
          return resolve(data.serialize());
        })
        .catch((error) => {
          return reject(new DatabaseError(error.message, error.code));
        });
    });
  },

  // update user
  updateUser: (col, param, data) => {
    return new Promise(async (resolve, reject) => {
      logger.log('::::::::Updating user data...........');
      return await new User()
        .where(col, '=', param)
        .save(data, {
          method: 'update',
          require: true,
          patch: true,
          autoRefresh: false,
        })
        .then(async (user) => {
          logger.log('::::::::User data updated successfully.............');
          return resolve(user);
        })
        .catch((error) => {
          return reject(new DatabaseError(error.message, error.code));
        });
    });
  },

  // get a user by params
  getUser: (params) => {
    const queryParams = {};
    if ('email' in params) {
      queryParams.email = params.email;
    }
    if ('password' in params) {
      queryParams.password = params.password;
    }
    if ('id' in params) {
      queryParams.id = params.id;
    }
    return new Promise(async (resolve, reject) => {
      logger.log(':::::Fetching user data...... ');
      return await new User()
        .query(async (qb) => {
          qb.andWhere(queryParams);
        })
        .fetchAll()
        .then(async (data) => {
          return resolve(data);
        })
        .catch((error) => {
          return reject(new DatabaseError(error.message, error.code));
        });
    });
  },
});

module.exports = bookshelf.model('User', User);
