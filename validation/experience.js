const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateExperienceInput(data) {
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : '';
  data.companyName = !isEmpty(data.companyName) ? data.companyName : '';
  data.address = !isEmpty(data.address) ? data.address : '';
  data.from = !isEmpty(data.from) ? data.from : '';

  if (Validator.isEmpty(data.title)) {
    errors.title = 'Job title is required';
  }

  if (Validator.isEmpty(data.companyName)) {
    errors.companyName = 'Company name is required';
  }

  if (Validator.isEmpty(data.locationAddress)) {
    errors.locationAddress = 'Company address is required.';
  }

  if (Validator.isEmpty(data.from)) {
    errors.from = 'Start date is required.';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
