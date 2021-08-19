/** @module Form/Testimonial */
import { makePOST, makePUT } from 'services/httpRequest';
import { ENDPOINT_GETTESTIMONIALS } from 'services/settings';
import { addTestimonial } from 'redux/testimonials/actions/testimonials'
/**
 * Function submit default of component Form Testimonial.
 * @function submit
 * @param {Object} values - A object with all params sanitized by formik.
 * @param {Function} setSubmit - A function to handle states of submit in this moment or not.
 * @param {Function} setTypeMSJ - A function to handle show alert/text/etc of error or success.
 * @param {Number} [id=false] - A number id to call API.
 * @example
 * import FormTestimonial from "components/form/Activity/FormTestimonial.js"
 * import submit from "components/form/testimonial/submit.js";
 * <FormTestimonial /> // Default version use this module, that is implicit.
 * <FormTestimonial changeSubmit={submit} /> // This is explicit.
 */
const submit = async ({ name, content, image }, setSubmit, setTypeMSJ, id = false, dispatch) => {
  let result;
  // Request Fetch with service http.
  if (id) {
    result = await makePUT(`${ENDPOINT_GETTESTIMONIALS}/${id}`, {
      name,
      image,
      content,
    });
  } else {
    result = await makePOST(`${ENDPOINT_GETTESTIMONIALS}`, {
      name,
      image,
      content,  
    });
  }
  // Results
  if (!result.status) {
    // Need change for propiety of response.
    console.log(result);
    dispatch(addTestimonial(result))
    setTypeMSJ('success');
    setSubmit(false);
  } else if (!result.ok) {
    setTypeMSJ('error');
    setSubmit(false);
  }
};

export default submit;