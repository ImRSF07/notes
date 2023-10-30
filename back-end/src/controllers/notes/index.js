'use strict';

const httpStatus = require('http-status');

class NotesController {
  constructor(notesService, logger) {
    this.notesService = notesService;
    this.logger = logger;
  }

  /**
   * Add note controller
   * @param {*} req
   * @param {*} res
   */
  async addNote(req, res) {
    const processName = 'Add note';
    return await this.notesService
      .addNote(req.body)
      .then((data) => {
        return res.status(httpStatus.OK).send({
          message: `Process ran successfully: ${processName}`,
          ...data,
        });
      })
      .catch((error) => {
        const errMessage = `Error in process: ${processName}: \n`;
        this.logger.error(errMessage, JSON.stringify(error));
        if (error.message) {
          return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
        } else {
          return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
            message: errMessage,
          });
        }
      });
  }

  /**
   * Get notes controller
   * @param {*} req
   * @param {*} res
   */
  async getNotes(req, res) {
    const processName = 'Get notes';
    return await this.notesService 
      .getNotes(req.query)
      .then((data) => { 
        return res.status(httpStatus.OK).send({
          message: `Process ran successfully: ${processName}`,
          ...data,
        }); 
      })
      .catch((error) => {
        const errMessage = `Error in process: ${processName}: \n`;
        this.logger.error(errMessage, JSON.stringify(error));
        if (error.message) {
          return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
        } else {
          return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
            message: errMessage,
          });
        }
      });
  }
}

module.exports = NotesController;
