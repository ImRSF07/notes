const { ValidationError } = require('../utils/errors');

const validateRequest = (schema, type) => {
  return (req, res, next) => {
    const result = schema.validate(req[type]);
    if (result.error) {
      throw new ValidationError(
        JSON.stringify(result.error.details[0].message)
      );
    } else {
      if (!req.value) {
        req.value = {};
      }
      req.value[type] = result.value;
      next();
    }
  };
};

module.exports = {
  validateBody: (schema) => validateRequest(schema, 'body'),
  validateQuery: (schema) => validateRequest(schema, 'query'),
  validateParams: (schema) => validateRequest(schema, 'params'),
};
