'use strict';

const di = require('../di');
const AuthController = di.get('authController');

const { validateBody } = require('../validations/helpers.js');
const {
  register,
  login,
  forgotPassword,
} = require('../validations/schemas/auth');

module.exports = (app) => {
  // @route /auth/register
  // @desc Register user
  // @access Public
  app.post('/auth/register', validateBody(register), (req, res) =>
    AuthController.register(req, res)
  );

  // @route /auth/login
  // @desc Login user
  // @access Public
  app.post('/auth/login', validateBody(login), (req, res) =>
    AuthController.login(req, res)
  );

  // @route /auth/forgot-password
  // @desc Forgot password
  // @access Public
  app.post('/auth/forgot-password', validateBody(forgotPassword), (req, res) =>
    AuthController.forgotPassword(req, res)
  );
};
