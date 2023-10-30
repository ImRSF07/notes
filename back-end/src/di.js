'use strict';

const serviceLocator = require('./lib/service-locator');
const turboLogger = require('turbo-logger').createStream({});
const AuthController = require('./controllers/auth');
const AuthService = require('./services/auth');
const NotesController = require('./controllers/notes');
const NotesService = require('./services/notes');

serviceLocator.register('logger', () => {
  return turboLogger;
});

serviceLocator.register('authService', () => {
  let logger = serviceLocator.get('logger');

  return new AuthService(logger);
});
serviceLocator.register('authController', () => {
  let userService = serviceLocator.get('authService');
  let logger = serviceLocator.get('logger');

  return new AuthController(userService, logger);
});

serviceLocator.register('notesService', () => {
  let logger = serviceLocator.get('logger');

  return new NotesService(logger);
});
serviceLocator.register('notesController', () => {
  let userService = serviceLocator.get('notesService');
  let logger = serviceLocator.get('logger');

  return new NotesController(userService, logger);
});

module.exports = serviceLocator;
