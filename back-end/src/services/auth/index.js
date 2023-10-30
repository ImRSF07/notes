'use strict';
const Auth = require('../../lib/auth');

const Repository = require('../auth/repository/index');

class AuthService extends Auth {
  constructor(logger) {
    super();
    this.logger = logger;
    this.repository = new Repository(this.logger);
  }

  createLogMessage(logMessage, processName, type = 'log') {
    const service = 'Auth';
    const message = `${service} Service (${processName}) ::: ${logMessage}`;
    if (type === 'log') {
      this.logger.log(message);
    } else if (type === 'error') {
      this.logger.error(message);
    }
  }

  /**
   * Register user service
   * @param {Object} payload
   */
  async register(payload) {
    const processName = 'Register';
    return new Promise(async (resolve, reject) => {
      try {
        const successMessage = 'User registered successfully.';
        payload.password = await this.hashPassword(payload.password);
        const registerUser = await this.repository.insertUser(payload);
        this.createLogMessage(successMessage, processName, 'log');
        return resolve({
          result: { ...registerUser },
          message: successMessage,
        });
      } catch (error) {
        const logError = error.message;
        this.createLogMessage(logError, processName, 'error');
        if (error.code === 'ER_DUP_ENTRY') {
          return reject({ message: 'Email has already been used.' });
        }
        return reject(error);
      }
    });
  }

  /**
   * Login user service
   * @param {Object} payload
   */
  async login(payload) {
    const processName = 'Login';
    return new Promise(async (resolve, reject) => {
      try {
        const successMessage = 'User logged in successfully.';
        const user = await this.repository.getUser(
          { email: payload.email },
          true
        );
        if (user.length > 0) {
          const comparePassword = await this.comparePassword(
            payload.password,
            user[0].password
          );
          if (comparePassword) {
            delete user[0].password;
            this.createLogMessage(successMessage, processName, 'log');
            return resolve({
              result: { ...user },
              message: successMessage,
            });
          } else {
            return reject({ message: 'Invalid password.' });
          }
        } else {
          return reject({ message: 'Account not found.' });
        }
      } catch (error) {
        const logError = error.message;
        this.createLogMessage(logError, processName, 'error');
        return reject(error);
      }
    });
  }

  /**
   * Forgot Password user service
   * @param {Object} payload
   */
  async forgotPassword(payload) {
    const processName = 'Forgot Password';
    return new Promise(async (resolve, reject) => {
      try {
        const successMessage = 'Password reset completed successfully.';
        const user = await this.repository.getUser({ email: payload.email });
        if (payload.password !== payload.confirmPassword) {
          return reject({
            message: 'Password and confirm password does not match.',
          });
        }
        if (user.length > 0) {
          const updatedUser = await this.repository.updateUser(
            'email',
            payload.email,
            {
              password: await this.hashPassword(payload.password),
            }
          );
          this.createLogMessage(successMessage, processName, 'log');
          return resolve({
            result: { ...updatedUser },
            message: 'Password reset successfully.',
          });
        } else {
          return reject({ message: 'Email address not found.' });
        }
      } catch (error) {
        const logError = error.message;
        this.createLogMessage(logError, processName, 'error');
        return reject(error);
      }
    });
  }
}

module.exports = AuthService;
