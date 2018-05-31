const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateFileInput(data) {
  let errors = {};

  data.displayName = !isEmpty(data.displayName) ? data.displayName : '';
  data.notes = !isEmpty(data.notes) ? data.notes : '';
  data.categories = !isEmpty(data.categories) ? data.categories : '';

  if (Validator.isEmpty(data.displayName)) {
    errors.displayName = 'Location name is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
