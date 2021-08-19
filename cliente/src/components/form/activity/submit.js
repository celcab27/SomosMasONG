/** @module Form/Activity */
import { makePOST, makePATCH } from 'services/httpRequest';
import { ENDPOINT_ACTIVITIES } from 'services/settings';
import { setNewActivity } from 'redux/activities/actions/activities';
/**
 * Function submit default of component Form Activity.
 * @function submit
 * @param {Object} values - A object with all params sanitized by formik.
 * @param {Function} setSubmit - A function to handle states of submit in this moment or not.
 * @param {Function} setTypeMSJ - A function to handle show alert/text/etc of error or success.
 * @param {Number} [id=false] - A number id to call API.
 * @example
 * import FormActivity from "components/form/Activity/FormActivity.js"
 * import submit from "components/form/Activity/submit.js";
 * <FormActivity /> // Default version use this module, that is implicit.
 * <FormActivity changeSubmit={submit} /> // This is explicit.
 */
const submit = async ({ name, content }, setSubmit, setTypeMSJ, id = false, dispatch) => {
  let result;
  // Request Fetch with service http.
  if (id) {
    result = await makePATCH(`${ENDPOINT_ACTIVITIES}/${id}`, {
      name,
      content,
    });
  } else {
    result = await makePOST(ENDPOINT_ACTIVITIES, {
      name,
      content,
    });
  }
  // Results
  if (result.content) {
    // Need change for propiety of response.
    dispatch(setNewActivity(result));
    setTypeMSJ('success');
    setSubmit(false);
  } else if (!result.ok) {
    setTypeMSJ('error');
    setSubmit(false);
  }
};

export default submit;
