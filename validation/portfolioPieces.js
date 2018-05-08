const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validatePortfolioPiecesInput(data) {
  let errors = {};
  
  data.type = !isEmpty(data.type) ? data.type : '';
  data.title = !isEmpty(data.title) ? data.title : '';
  data.companyName = !isEmpty(data.companyName) ? data.companyName : '';
  data.locationAddress = !isEmpty(data.locationAddress) ? data.locationAddress : '';

  if (Validator.isEmpty(data.type)) {
    errors.type = 'Type is required';
  }
  if (Validator.isEmpty(data.title)) {
    errors.title = 'Title is required';
  }

  if (Validator.isEmpty(data.companyName)) {
    errors.companyName = 'Company name is required';
  }

  if (Validator.isEmpty(data.locationAddress)) {
    errors.locationAddress = 'Company address is required.';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
