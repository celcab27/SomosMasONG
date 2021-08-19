import {
  validationActivityName,
  validationActivityContent,
} from '../utilValidation';

/**Validations for editActivityForm
 * @function validate
 * @param {Object} {name, content} - form's values
 */

const validate = ({ name, content }) => {
  const errors = {};

  const isValidActivityName = validationActivityName(name);
  if (isValidActivityName) errors.name = isValidActivityName;

  const isValidContent = validationActivityContent(content);
  if (isValidContent) errors.content = isValidContent;

  return errors;
};

export default validate;
