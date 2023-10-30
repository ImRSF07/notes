'use strict';

const httpStatus = require('http-status');

class AuthController {
  constructor(authService, logger) {
    this.authService = authService;
    this.logger = logger;
  }

  /**
   * Register user controller
   * @param {*} req
   * @param {*} res
   */
  async register(req, res) {
    const processName = 'Register';
    return await this.authService
      .register(req.body)
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
   * Login user controller
   * @param {*} req
   * @param {*} res
   */
  async login(req, res) {
    const processName = 'Login';
    return await this.authService
      .login(req.body)
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
   * Forgot password controller
   * @param {*} req
   * @param {*} res
   */
  async forgotPassword(req, res) {
    const processName = 'Forgot Password';
    return await this.authService
      .forgotPassword(req.body)
      .then((data) => {
        return res.status(httpStatus.OK).send({
          message: `Process ran successfully: ${processName}`,
          data,
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
   * Reset password controller
   * @param {*} req
   * @param {*} res
   */
  async resetPassword(req, res) {
    const processName = 'Reset Password';
    return await this.authService
      .resetPassword(req.body)
      .then((data) => {
        return res.status(httpStatus.OK).send({
          message: `Process ran successfully: ${processName}`,
          data,
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

module.exports = AuthController;
