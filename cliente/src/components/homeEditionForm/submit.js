import { postWelcomeMessage, postSlider } from 'redux/home/actions/home';

const submit =  async(
   { welcomeMessage, sliderImage, sliderText },
    setSubmit,
    setShowError,
    redirect,
    dispatch
  ) =>  {
    const data = new FormData();
    data.append('sliderImage', sliderImage) //esto tiene q ir en el dispatch pero me da error 
    const response = await dispatch(postWelcomeMessage(welcomeMessage));
    const response2 = await dispatch(postSlider([{text: sliderText, image: sliderImage}])); 
    if (response && response2) {
      redirect('/');
    }else{
      setShowError(true);
    }
    setSubmit(false);
  };
  
  export default submit;
