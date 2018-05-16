const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRegisterInput(data) {
  let errors = {};

  if (data.name && !Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.message = 'Name must be between 2 and 30 characters';
  }

  if (data.email && !Validator.isEmail(data.email)) {
    errors.message = 'Email is invalid';
  }

  if (data.password && !Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.message = 'Password must be at least 6 characters';
  }

  if (data.password && Validator.isEmpty(data.password2)) {
    errors.message = 'Confirm Password field is required';
  }

  if (data.password && data.password2 && !Validator.equals(data.password, data.password2)) {
    errors.message = 'Passwords must match';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
