'use strict';

const joi = require('joi');

const register = joi.object({
  email: joi.string().email(),
  password: joi.string().trim().min(1).required(),
});

const login = joi.object({
  email: joi.string().email(),
  password: joi.string().required(),
});

const forgotPassword = joi.object({
  email: joi.string().email(),
  password: joi.string().required(),
  confirmPassword: joi.string().required(),
});

module.exports = {
  register,
  login,
  forgotPassword,
};
