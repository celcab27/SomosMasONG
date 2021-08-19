import {
  validationNameCategory,
  validationDescriptionCategory,
} from './../utilValidation';

/**Validation function for Contact Form
 * @function validate
 * @param {Object} -Params you want to check
 * @example
 * validate(values)
 */
const validate = ({ name, description }) => {
  const errors = {};
  // Check name category.
  const isValidNameCategory = validationNameCategory(name);
  if (isValidNameCategory) errors.name = isValidNameCategory;
  // Check description category.
  const isValidDescription = validationDescriptionCategory(description);
  if (isValidDescription) errors.description = isValidDescription;
  return errors;
};

export default validate;
