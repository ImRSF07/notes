'use strict';

var config = require('./src/config/config');
let env = process.env.NODE_ENV || 'dev';
let db;
env = 'dev'
db = config.mysql.connection[env];

console.log("Running migrations with env ", process.env.NODE_ENV, "\n", db)
var dbConfig = {
    client: 'mysql',
    connection: db,
    pool: config.mysql.pool,
    migrations: {
        tableName: 'migrations'
    },
    seeds: {
        directory: './seeds'
    },
    debug: true
};


/**
 * Database settings.
 *
 * Setting the db settings in knexfile allows us to make use of the migrations.
 *
 * @type {Object} Database settings
 */
module.exports = dbConfig;