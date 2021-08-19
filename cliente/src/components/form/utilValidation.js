/** @module Form */
import listCategories from './news/categories';
/**
 * Function to validate first name for forms.
 * @fuction validationFirstName
 * @param {String} firstName - A string to check.
 * @example
 * validationFirstName("Brendam");
 * validationFirstName("B");
 * @returns {String} Returns string to set in an object Error.
 */
export const validationFirstName = (firstName) => {
  if (!firstName) return 'Requerido';
  else if (firstName.length > 18) return 'Como máximo 18 caracteres.';
  else if (firstName.length < 2) return 'Debe contener 2 caracteres o más.';
};
/**
 * Function to validate last name for forms.
 * @fuction validationLastName
 * @param {String} lastName - A string to check.
 * @example
 * validationLastName("Einch");
 * validationLastName("E");
 * @returns {String} Returns string to set in an object Error.
 */
export const validationLastName = (lastName) => {
  if (!lastName) return 'Requerido';
  else if (lastName.length > 18) return 'Como máximo 18 caracteres.';
  else if (lastName.length < 2) return 'Debe contener 2 caracteres o más.';
};
/**
 * Function to validate email for forms.
 * @fuction validationEmail
 * @param {String} email - A string to check.
 * @example
 * validationEmail("BrendamEinch@gmail.com");
 * validationEmail("Enbrem");
 * @returns {String} Returns string to set in an object Error.
 */
export const validationEmail = (email) => {
  if (!email) return 'Requerido';
  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email))
    return 'Invalid email address.';
  else if (email.length > 64) return 'Debe contener mas de 64 caracteres.';
  else if (email.length < 2) return 'Debe contener 2 caracteres o más.';
};
/**
 * Function to validate password for forms.
 * @fuction validationPassword
 * @param {String} password - A string to check.
 * @example
 * validationPassword("123456");
 * validationPassword("1234);
 * @returns {String} Returns string to set in an object Error.
 */
export const validationPassword = (password) => {
  if (!password) return 'Requerido';
  else if (password.length < 6) return 'Debe contener 6 caracteres o más.';
  else if (password.length > 32)
    return 'Debe contener un máximo de 32 caracteres.';
};

/**Function to validate message for forms
 * @function validationMessage
 * @param {String} message -A string to check.
 * @example
 * validationMessage("Your message should be larger than 30 characters.")
 * validationMessage("Incorrect message.")
 * @returns {String} Returns string to set in an object Error.
 */
export const validationMessage = (message) => {
  if (!message) return 'Requerido';
  else if (message.length < 10) return 'Debe contener 10 caracteres o más.';
};
/**
 * Function to validate title for forms.
 * @fuction validationTitle
 * @param {String} title - A string to check.
 * @example
 * validationFirstName("My News");
 * validationFirstName("N");
 * @returns {String} Returns string to set in an object Error.
 */
export const validationTitle = (title) => {
  if (!title) return 'Requerido';
  else if (title.length > 18) return 'Como máximo 18 caracteres.';
  else if (title.length < 2) return 'Debe contener 2 caracteres o más.';
};
/**
 * Function to validate images for forms.
 * @fuction validationImage
 * @param {Object} image - An object with data of Image to check.
 * @example
 * validationImage(myImage);
 * @returns {String} Returns string to set in an object Error.
 */
export const validationImage = (image) => {
  if (!image) return 'Requerido';
  else if (!image.name) return 'Requerido';
  else if (!/\.(gif|jpe?g|png|webp|bmp)$/i.test(image.name))
    return 'El archivo debe ser una imagen y su extensión debe ser un .git, .jpg, .png, .webp, .bmp.';
  else if (image.size > 2 * 1024 * 1024)
    return 'El tamaño del archivo es demasiado grande. No debe superar los 2 mb.';
};
/**
 * Function to validate categories for forms.
 * @fuction validationCategory
 * @param {string} category - A string to compare with a contain in array.
 * @example
 * validationCategory("News");
 * validationCategory("Ne");
 * @returns {String} Returns string to set in an object Error.
 */
export const validationCategory = (category) => {
  if (!category) return 'Requerido';
  else if (!listCategories.includes(category))
    return 'El valor de categorías, no es correcto.';
};
/**
 * Function to validate contain for forms.
 * @fuction validationContaint
 * @param {String} contain - A string to check.
 * @example
 * validationContain("Brendam and your contain to add a news.");
 * validationContaint("B");
 * @returns {String} Returns string to set in an object Error.
 */
export const validationContain = (contain) => {
  if (!contain) return 'Requerido';
  else if (contain.length > 100240) return 'Como máximo 100240 caracteres.';
  else if (contain.length < 24) return 'Debe contener 24 caracteres o más.';
};
/**
 * Function to validate activity name in edit form.
 * @fuction validationActivityName
 * @param {string} name - A string to check validate.
 * @example
 * validationActivityName("Activity");
 * @returns {String} Returns string to set in an object Error.
 */
export const validationActivityName = (name) => {
  if (!name) return 'Requerido';
  else if (name.length > 20)
    return 'El nombre de la actividad debe contener como maximo 20 caracteres';
  else if (name.length < 4)
    return 'El nombre de la actividad debe contener como minimo 4 caracteres';
};
/**
 * Function to validate activity content in edit form.
 * @fuction validationActivityContent
 * @param {string} content - A string to check validate.
 * @example
 * validationActivityContent("Activity content example");
 * @returns {String} Returns string to set in an object Error.
 */
export const validationActivityContent = (content) => {
  if (!content) return 'Requerido';
  else if (content.length > 50)
    return 'El contenido de la actividad debe contener como maximo 50 caracteres';
  else if (content.length < 4)
    return 'El contenido de la actividad debe contener como minimo 4 caracteres';
};
/**
 * Function to validate name for forms category.
 * @fuction validationNameCategory
 * @param {String} name - A string to check.
 * @example
 * validationNameCategory("News");
 * validationNameCategory("n");
 * @returns {String} Returns string to set in an object Error.
 */
export const validationNameCategory = (name) => {
  if (!name) return 'Requerido';
  else if (name.length > 24) return 'Como máximo 24 caracteres.';
  else if (name.length < 2) return 'Debe contener 2 caracteres o más.';
};
/**
 * Function to validate description for forms category.
 * @fuction validationDescriptionCategory
 * @param {String} description - A string to check.
 * @example
 * validationDescriptionCategory("A news category is section about all news stuff.");
 * validationDescriptionCategory("n");
 * @returns {String} Returns string to set in an object Error.
 */
export const validationDescriptionCategory = (description) => {
  if (!description) return 'Requerido';
  else if (description.length > 256) return 'Como máximo 256 caracteres.';
  else if (description.length < 12) return 'Debe contener 12 caracteres o más.';
};
/**
 * Function to validate urlSocialLink for publicData form.
 * @fuction validationSocialLink
 * @param {String} urlSocialLink - A string to check.
 * @example
 * validationSocialLink("instagram.com/ongnameexample");
 * @returns {String} Returns string to set in an object Error.
 */
export const validationSocialLink = (urlSocialLink) => {
  if (!urlSocialLink) return 'Requerido';
  else if (urlSocialLink.length > 128) return 'Como máximo 128 caracteres.';
  else if (urlSocialLink.length < 12)
    return 'Debe contener 12 caracteres o más.';
};
/**
 * Function to validate validationPhone for publicData form.
 * @fuction validationPhone
 * @param {String} phone - A string to check.
 * @example
 * validationPhone("54343222111");
 * @returns {String} Returns string to set in an object Error.
 */
export const validationPhone = (phone) => {
  if (!phone) return 'Requerido';
  else if (!/^\d+$/.test(phone)) return 'Solo caracteres numericos';
  else if (phone.length > 40) return 'Como máximo 40 caracteres.';
  else if (phone.length < 7) return 'Debe contener 7 caracteres o más.';
};
/**
 * Function to validate validationImagePublicData for publicData form.
 * @fuction validationImagePublicData
 * @param {String} phone - A string to check.
 * @example
 * validationImagePublicData("urlimageexample.jpg");
 * @returns {String} Returns string to set in an object Error.
 */
export const validationImagePublicData = (imagen) => {
  if (!imagen) return 'Requerido';
  else if (!/\.(jpe?g|png|bmp)$/i.test(imagen))
    return 'La imagen debe ser una URL con terminación en un formato valido (jpe/g, png, bmp)';
};
