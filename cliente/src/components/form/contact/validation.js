import {
  validationEmail,
  validationFirstName,
  validationMessage,
} from './../utilValidation';

/**Validation function for Contact Form
 * @function validate
 * @param {Object} -Params you want to check
 * @example
 * validate(values)
 */

const validate = ({ email, name, message }) => {
  const errors = {};

  const isValidEmail = validationEmail(email);
  if (isValidEmail) errors.email = isValidEmail;

  const isValidName = validationFirstName(name);
  if (isValidName) errors.name = isValidName;

  const isValidMessage = validationMessage(message);
  if (isValidMessage) errors.message = isValidMessage;

  return errors;
};

export default validate;
