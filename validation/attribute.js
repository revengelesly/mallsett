const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validatelocationInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : '';
  data.address = !isEmpty(data.address) ? data.address : '';
  data.categories = !isEmpty(data.categories) ? data.categories : '';

  if (Validator.isEmpty(data.name)) {
    errors.name = 'Location name is required';
  }

  if (Validator.isEmpty(data.address)) {
    errors.address = 'Company field is required';
  }

  if (Validator.isEmpty(data.categories)) {
    errors.categories = 'Must select at least one category';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
