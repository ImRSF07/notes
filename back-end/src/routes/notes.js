'use strict';

const di = require('../di');
const NotesController = di.get('notesController');

const { validateBody, validateQuery } = require('../validations/helpers.js');
const { addNote, getNotes } = require('../validations/schemas/notes');

module.exports = (app) => {
  // @route /notes
  // @desc Get notes
  // @access Public
  app.get('/notes', validateQuery(getNotes), (req, res) =>
    NotesController.getNotes(req, res)
  );
};
