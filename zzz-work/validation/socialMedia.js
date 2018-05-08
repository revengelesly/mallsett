const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateSocialMediaInput(data) {
  let errors = {};
  
  data.channel = !isEmpty(data.channel) ? data.channel : '';
  data.link = !isEmpty(data.link) ? data.link : '';

  if (Validator.isEmpty(data.channel)) {
    errors.channel = 'Channel Type is required';
  }
  if (Validator.isEmpty(data.link)) {
    errors.link = 'Please add a link to your profile';
  }
  if (!isEmpty(data.link)) {
    if (!Validator.isURL(data.link)) {
      errors.link = 'Not a valid URL';
    }
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
