import { makePUT } from 'services/httpRequest';
import { ENDPOINT_ACTIVITIES } from 'services/settings';
/** Submit's Function for editActivityForm
 * @function submit
 * @param {Object} {name, content, image} - form's values
 * @param {Object} {id} - id of activity to edit
 * @param {function} setSubmit - customize submit function
 * @param {function} setTypeMSJ - activates an alert
 */

const submit = (values, setSubmit, setTypeMSJ) => {
  try {
    makePUT(`${ENDPOINT_ACTIVITIES}/${values.id}`, values);
    setTypeMSJ('success');
  } catch {
    setTypeMSJ('error');
  }
};

export default submit;
