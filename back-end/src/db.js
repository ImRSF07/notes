'use strict';

let config = require('./config/config');
const logger = require('turbo-logger').createStream({});
let knexClient = require('knex/lib/client');
let origQuery = knexClient.prototype.query;
const util = require('util');
const env = 'dev';

knexClient.prototype.query = function (connection, obj) {
  if(env !== 'test') {
    logger.log(`SQL: ${obj.sql}  --  ${util.inspect(this.prepBindings(obj.bindings))}`);
  }
  return origQuery.apply(this, arguments);
};

let knex = require('knex')({
	client: 'mysql',
	connection: config.mysql.connection[env],
	ssl: true,
	migrations: {
		tableName: 'migrations'
	},
	pool: config.mysql.pool
});

module.exports = knex;