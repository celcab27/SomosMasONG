import {
  validationFirstName as validationNameActivity,
  validationContain,
} from './../utilValidation';
/**Validation function for Activity Form
 * @function validate
 * @param {Object} -Params you want to check
 * @example
 * validate(values)
 */
const validate = ({ name, content }) => {
  const errors = {};
  // Check name activity.
  const isValidNameActivity = validationNameActivity(name);
  if (isValidNameActivity) errors.name = isValidNameActivity;
  // Check content activity.
  const isValidContent = validationContain(content);
  if (isValidContent) errors.content = isValidContent;
  return errors;
};

export default validate;
