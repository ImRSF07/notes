'use strict';

const authRoutes = require('./auth');
const notesRoutes = require('./notes');

module.exports = (app) => {
  authRoutes(app);
  notesRoutes(app);
};
