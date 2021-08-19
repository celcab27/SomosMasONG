import {validationFirstName, validationLastName} from '../utilValidation'

/**Validations for EditUserForm
 * @function validate
 * @param {Object} {name, lastName} - form's values
 */

const validate = ({name, lastName}) => {
    const errors = {};

    const isValidFirstName = validationFirstName(name);
    if(isValidFirstName) errors.name = isValidFirstName;

    const isValidLastName = validationLastName(lastName);
    if(isValidLastName) errors.lastName = isValidLastName;

    return errors;
};

export default validate;