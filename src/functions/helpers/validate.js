import validator from 'validator';
import isEmpty from '../../utils/isEmpty';

function validate(requestBody) {
  const requiredFields = ['email', 'subject', 'message'];

  const errors = {};

  // Ensure all fields are present
  for (let i = 0; i < requiredFields.length; i++) {
    const fieldName = requiredFields[i];

    if (!(fieldName in requestBody)) {
      errors[fieldName] = `${fieldName.charAt(0).toUpperCase() +
        fieldName.slice(1)} field is required.`;
    }
  }

  if (!isEmpty(errors)) {
    return {
      isValid: false,
      errors
    };
  }

  // Ensure all fields are strings
  for (let i = 0; i < requiredFields.length; i++) {
    const fieldName = requiredFields[i];

    if (typeof requestBody[fieldName] !== 'string') {
      errors[fieldName] = `${fieldName.charAt(0).toUpperCase() +
        fieldName.slice(1)} must be of type: string.`;
    }
  }

  if (!isEmpty(errors)) {
    return {
      isValid: false,
      errors
    };
  }

  // Ensure all required fields meet any other specifications.
  if (!validator.isLength(requestBody.subject, { min: 5, max: 100 })) {
    errors.subject = 'Must be between 5-100 characters.';
  }
  if (!validator.isLength(requestBody.message, { min: 10, max: 1000 })) {
    errors.message = 'Must be between 10-1000 characters.';
  }
  if (!validator.isEmail(requestBody.email)) {
    errors.email = 'Must be a valid email address.';
  }

  if (!isEmpty(errors)) {
    return {
      isValid: false,
      errors
    };
  }

  return {
    isValid: true,
    errors: null
  };
}

export default validate;
