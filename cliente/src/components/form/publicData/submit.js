import { makePUT } from 'services/httpRequest';
import { ENDPOINT_PUBLICDATA } from 'services/settings';
/** Submit's Function for editActivityForm
 * @function submit
 * @param {Object} {values} - form's values
 * @param {function} setTypeMSJ - activates an alert
 */

const submit = (values, setTypeMSJ) => {
  try {
    makePUT(ENDPOINT_PUBLICDATA, values);
    setTypeMSJ('success');
  } catch {
    setTypeMSJ('error');
  }
};

export default submit;
