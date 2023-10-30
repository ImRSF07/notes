'use strict';
const logger = require('turbo-logger').createStream({});
const _ = require('lodash');

const bookshelf = require('../bookshelf');

const { DatabaseError } = require('../utils/errors');

let Note = bookshelf.Model.extend({
  tableName: 'notes',
  hasTimestamps: true,
  hidden: ['password'],

  // get a note by params
  getNote: (params) => {
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
      logger.log(':::::Fetching note data...... ');
      return await new Note()
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

module.exports = bookshelf.model('Note', Note);
