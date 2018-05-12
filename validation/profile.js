const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateProfileInput(data) {
  let errors = {};

  data.handle = !isEmpty(data.handle) ? data.handle : '';
  data.profileType = !isEmpty(data.profileType) ? data.profileType : '';
  data.displayName = !isEmpty(data.displayName) ? data.displayName : '';
  data.category = !isEmpty(data.category) ? data.category : '';
  
  data.status = !isEmpty(data.status) ? data.status : '';

  if (!Validator.isLength(data.handle, { min: 2, max: 40 })) {
    errors.handle = 'Handle needs to between 2 and 4 characters';
  }

  if (Validator.isEmpty(data.handle)) {
    errors.handle = 'Profile handle is required';
  }

  if (Validator.isEmpty(data.profileType)) {
    errors.profileType = 'Status field is required';
  }
   if (Validator.isEmpty(data.displayName)) {
    errors.displayName = 'Status field is required';
  }
   if (Validator.isEmpty(data.category)) {
    errors.category = 'Status field is required';
  }
  if (Validator.isEmpty(data.status)) {
    errors.status = 'Status field is required';
  }
 

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
