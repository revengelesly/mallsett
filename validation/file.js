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


  if (Validator.isEmpty(data.categories)) {
    errors.categories = 'Must select at least one category';
  }
  
 


  return {
    errors,
    isValid: isEmpty(errors)
  };
};
