/** @module Form/Testimony */
import {
    validationTitle as validationName,
    validationImage,
    validationContain as validateContent,
  } from '../utilValidation';
  /**
   * Function to know if predeterminate values are valid. Check values for title, image, name and contain in a object in form register.
   * @fuction validation
   * @param {String} values.name - A string.
   * @param {String} values.image - A string.
   * @param {String} values.contain - A string.
   * @example
   * validation(myObjectWithValues); // Return an object error with results.
   * @returns {Object} Returns object Error.
   */
  const validation = ({ name, image, content }) => {
    const errors = {};
    // Check Title.
    const isValidName = validationName(name);
    if (isValidName) errors.name = isValidName;
    // Check Image.
    const isValidImage = validationImage(image);
    if (isValidImage) errors.image = isValidImage;
    // Check Containt.
    const isValidContent = validateContent(content);
    if (isValidContent) errors.content = isValidContent;
  
    return errors;
  };
  
  export default validation;