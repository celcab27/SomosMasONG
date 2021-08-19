import { validationWelcomeText, validationSlideImage, validationSlideText } from "./utilValidation";

export const validation = ({ welcomeMessage, sliderImage, sliderText }) => {
  const errors = {};

  const isValidMessage =  validationWelcomeText(welcomeMessage);
  if (isValidMessage) errors.welcomeMessage = isValidMessage;

  const isValidImage = validationSlideImage(sliderImage);
  if (isValidImage) errors.sliderImage = isValidImage;
 
  const isValidSlideText = validationSlideText(sliderText);
  if (isValidSlideText) errors.sliderText = isValidSlideText;

  return errors;
};





