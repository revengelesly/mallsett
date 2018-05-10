const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validatelocationInput(data) {
  let errors = {};

  data.displayName = !isEmpty(data.displayName) ? data.displayName : '';
  data.notes = !isEmpty(data.notes) ? data.notes : '';
  data.categories = !isEmpty(data.categories) ? data.categories : '';
  data.directory = !isEmpty(data.directory) ? data.directory : '';

  if (Validator.isEmpty(data.displayName)) {
    errors.displayName = 'Location name is required';
  }


  if (Validator.isEmpty(data.categories)) {
    errors.categories = 'Must select at least one category';
  }
  
  if (Validator.directory(data.directory)) {
    errors.categories = 'Must have a directory directory';
  }


  return {
    errors,
    isValid: isEmpty(errors)
  };
};
