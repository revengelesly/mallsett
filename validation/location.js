const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateLocationInput(data) {
  let errors = {};

  data.address = !isEmpty(data.address) ? data.address : '';
 

  if (Validator.isEmpty(data.address)) {
    errors.address = 'You must enter an address';
  }


  return {
    errors,
    isValid: isEmpty(errors)
  };
};
