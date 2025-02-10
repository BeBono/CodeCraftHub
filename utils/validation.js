const { validationResult } = require('express-validator');

// Function to handle validation errors
const validate = (req) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new Error(errors.array().map((err) => err.msg).join(', '));
  }
};

module.exports = { validate };
