'use strict';

const Repository = require('../notes/repository/index');

class NotesService {
  constructor(logger) {
    this.logger = logger;
    this.repository = new Repository(this.logger);
  }

  createLogMessage(logMessage, processName, type = 'log') {
    const service = 'Notes';
    const message = `${service} Service (${processName}) ::: ${logMessage}`;
    if (type === 'log') {
      this.logger.log(message);
    } else if (type === 'error') {
      this.logger.error(message);
    }
  }

  /**
   * Get notes service
   * @param {Object} query
   */
  async getNotes(query) {
    const processName = 'Get Notes';
    return new Promise(async (resolve, reject) => {
      try {
        const successMessage = 'Notes fetched successfully.';
        const notes = await this.repository.getNote(query);
        this.createLogMessage(successMessage, processName, 'log');
        return resolve({
          result: { notes: notes },
          message: successMessage,
        });
      } catch (error) {
        const logError = error.message;
        this.createLogMessage(logError, processName, 'error');
        return reject(error);
      }
    });
  }
}

module.exports = NotesService;
