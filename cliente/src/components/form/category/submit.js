/** @module Form/Contact */
import { addCategory } from 'redux/categories/actions/categories';
import { makePOST, makePATCH } from 'services/httpRequest';
import { ENDPOINT_CATEGORY } from 'services/settings';
/**
 * Function submit default of component Form Contact.
 * @function submit
 * @param {Object} values - A object with all params sanitized by formik.
 * @param {Function} setSubmit - A function to handle states of submit in this moment or not.
 * @param {Function} setTypeMSJ - A function to handle show alert/text/etc of error or success.
 * @example
 * import FormCategory from "components/form/contact/FormCategory.js"
 * import submit from "components/form/contact/submit.js";
 * <FormCategory /> // Default version use this module, that is implicit.
 * <FormCategory changeSubmit={submit} /> // This is explicit.
 */
const submit = async (
  { name, description },
  setSubmit,
  setTypeMSJ,
  id = false,
  dispatch
) => {
  let result;
  // Request Fetch with service http.
  if (id) {
    result = await makePATCH(`${ENDPOINT_CATEGORY}/${id}`, {
      name,
      description,
    });
  } else {
    result = await makePOST(ENDPOINT_CATEGORY, {
      name,
      description,
    });
  }
  // Results
  if (result) {
    // Need change for propiety of response.
    dispatch(addCategory(result));
    setTypeMSJ('success');
    setSubmit(false);
  } else if (!result.ok) {
    setTypeMSJ('error');
    setSubmit(false);
  }
};

export default submit;
