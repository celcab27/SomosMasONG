/** @module Form/Register */
import {
  validationFirstName,
  validationLastName,
  validationEmail,
  validationPassword,
} from '../utilValidation';
/**
 * Function to know if predeterminate values are valid. Check values for firstName, lastName, email and password in a object in form register.
 * @fuction validation
 * @param {String} values.firstName - A string.
 * @param {String} values.lastName - A string.
 * @param {String} values.email - A string.
 * @param {String} values.password - A string.
 * @example
 * validation(myObjectWithValues); // Return an object error with results.
 * @returns {Object} Returns object Error.
 */
const validation = ({ firstName, lastName, email, password }) => {
  const errors = {};
  // Check First Name.
  const isValidFN = validationFirstName(firstName);
  if (isValidFN) errors.firstName = isValidFN;
  // Check Last Name.
  const isValidLN = validationLastName(lastName);
  if (isValidLN) errors.lastName = isValidLN;
  // Check Email.
  const isValidEmail = validationEmail(email);
  if (isValidEmail) errors.email = isValidEmail;
  // Check Password.
  const isValidPassword = validationPassword(password);
  if (isValidPassword) errors.password = isValidPassword;

  return errors;
};

export default validation;
