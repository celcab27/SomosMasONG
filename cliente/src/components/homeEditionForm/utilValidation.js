
 export const validationWelcomeText = (welcomeMessage) => {
    if (!welcomeMessage) return 'Required';
    else if (welcomeMessage.length >= 60) return 'Must be 60 characters or less.';
    else if (welcomeMessage.length <= 20) return 'Must be 20 characters or more.';
  };

  export const validationSlideImage = (sliderImage) => {
    if (!sliderImage) return 'Required';
    else if (!'/http(s?):)([/|.|\w|\s|-])*\.(?:jpg|png)/')
      return 'Image no valid';
  };
  
  export const validationSlideText = (sliderText) => {
    if (!sliderText) return 'Required';
    else if (sliderText.length >= 150) return 'Must be 150 characters or less.';
    else if (sliderText.length <= 50) return 'Must be 50 characters or more.';
  };
  
  