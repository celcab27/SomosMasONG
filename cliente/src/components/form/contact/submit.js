/** @module Form/Contact */
import { makePOST } from 'services/httpRequest';
import { ENDPOINT_CONTACTS } from 'services/settings';
/**
 * Function submit default of component Form Contact.
 * @function submit
 * @param {Object} values - A object with all params sanitized by formik.
 * @param {Function} setSubmit - A function to handle states of submit in this moment or not.
 * @param {Function} setTypeMSJ - A function to handle show alert/text/etc of error or success.
 * @example
 * import FormContact from "components/form/contact/FormContact.js"
 * import submit from "components/form/contact/submit.js";
 * <FormContact /> // Default version use this module, that is implicit.
 * <FormContact changeSubmit={submit} /> // This is explicit.
 */
const submit = async ({ name, email, message }, setSubmit, setTypeMSJ) => {
  const result = await makePOST(ENDPOINT_CONTACTS, {
    name,
    email,
    message,
  });
  if (result.email) setTypeMSJ('success');
  else if (!result.ok) setTypeMSJ('error');
  setSubmit(false);
};

export default submit;
