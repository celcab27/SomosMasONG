import {
  validationSocialLink,
  validationFirstName,
  validationPhone,
  validationActivityContent,
  validationImagePublicData,
} from '../utilValidation';

/**Validations for editONGForm
 * @function validate
 * @param {Object} {name, image, phone, address, welcomeText, instagram, linkedin, facebook} - form's values
 */

const validate = ({
  name,
  image,
  phone,
  address,
  welcomeText,
  instagram,
  linkedin,
  facebook,
}) => {
  const errors = {};

  const isValidName = validationFirstName(name);
  if (isValidName) errors.name = isValidName;
  const isValidImage = validationImagePublicData(image);
  if (isValidImage) errors.image = isValidImage;
  const isValidPhone = validationPhone(phone);
  if (isValidPhone) errors.phone = isValidPhone;
  const isValidAddress = validationActivityContent(address);
  if (isValidAddress) errors.address = isValidAddress;
  const isValidWelcomeText = validationActivityContent(welcomeText);
  if (isValidWelcomeText) errors.welcomeText = isValidWelcomeText;
  const isValidInstagram = validationSocialLink(instagram);
  if (isValidInstagram) errors.instagram = isValidInstagram;
  const isValidLinkedin = validationSocialLink(linkedin);
  if (isValidLinkedin) errors.linkedin = isValidLinkedin;
  const isValidFacebook = validationSocialLink(facebook);
  if (isValidFacebook) errors.facebook = isValidFacebook;

  return errors;
};

export default validate;
