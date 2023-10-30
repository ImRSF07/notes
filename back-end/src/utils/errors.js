class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}

class DatabaseError extends Error {
  constructor(message, code) {
    super(message, code);
    this.name = 'DatabaseError';
    this.message = message;
    this.code = code;
  } 
}

module.exports = { ValidationError, DatabaseError };
 