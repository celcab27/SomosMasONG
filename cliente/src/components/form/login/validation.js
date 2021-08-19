/** @module Form/Login */
import { validationEmail, validationPassword } from '../utilValidation';
/**
 * Function to know if predeterminate values are valid. Check values for email and password in a object in form login.
 * @fuction validation
 * @param {String} values.email - A string.
 * @param {String} values.password - A string.
 * @example
 * validation(myObjectWithValues); // Return an object error with results.
 * @returns {Object} Returns object Error.
 */
const validation = ({ email, password }) => {
  const errors = {};
  // Check Email.
  const isValidEmail = validationEmail(email);
  if (isValidEmail) errors.email = isValidEmail;
  // Check Password.
  const isValidPassword = validationPassword(password);
  if (isValidPassword) errors.password = isValidPassword;

  return errors;
};

export default validation;
