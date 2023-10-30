'use strict';

const joi = require('joi');

const addNote = joi.object({
  title: joi.string().required(),
  name: joi.string().required(),
  description: joi.string().required(),
  user_id: joi.string().required(),
});

const getNotes = joi.object({
  user_id: joi.string().required(),
});

module.exports = {
  addNote,
  getNotes
};
