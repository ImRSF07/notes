'use strict';

module.exports = {
  port: process.env.PORT || 8000,
  mysql: {
    connection: {
      dev: {
        host: process.env.DATABASE_HOST || '127.0.0.1',
        port: process.env.DATABASE_PORT || 3306,
        database: process.env.DATABASE_NAME || 'hopla_notes',
        user: process.env.DATABASE_USERNAME || 'root',
        password: process.env.DATABASE_PASSWORD || 'sa123',
        debug: process.env.DATABASE_DEBUG ? ['ComQueryPacket'] : false,
      },
    },
    pool: {
      min: process.env.DATABASE_POOL_MIN
        ? parseInt(process.env.DATABASE_POOL_MIN, 10)
        : 2,
      max: process.env.DATABASE_POOL_MAX
        ? parseInt(process.env.DATABASE_POOL_MAX, 10)
        : 2,
    },
  },
};
