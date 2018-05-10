const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validatelocationInput(data) {
  let errors = {};

  data.address = !isEmpty(data.address) ? data.address : '';
 

  if (Validator.isEmpty(data.name)) {
    errors.name = 'You must enter an address';
  }


  return {
    errors,
    isValid: isEmpty(errors)
  };
};
