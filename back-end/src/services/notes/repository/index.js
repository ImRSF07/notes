'use strict';

const NoteModel = require('../../../models/note');

class NotesRepository {
  constructor(logger) {
    this.logger = logger;
  }

  async getNote(params, showHiddenFields = false) {
    return new Promise(async (resolve, reject) => {
      try {
        let note = await new NoteModel().getNote(params);
        if (showHiddenFields) {
          note = note.toJSON({ hidden: [] });
        } else {
          note = note.serialize();
        }
        return resolve(note);
      } catch (error) {
        return reject(error);
      }
    });
  }
}

module.exports = NotesRepository;
