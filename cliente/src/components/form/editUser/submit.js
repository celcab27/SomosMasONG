import { makePUT } from 'services/httpRequest';
import { ENDPOINT_USER } from 'services/settings';
import store from 'redux/store';
import { getLoggedUser, userLogout } from 'redux/user/actions/user';

/** Submit's Function for EditUserForm
 * @function submit
 * @param {Object} {name, lastName, roleID} - form's values
 * @param {function} setSubmit - customize submit function
 * @param {function} setTypeMSJ - activates an alert
 */
const submit = async ({ id, name, lastName, roleID }, setSubmit, setTypeMSJ) => {
  const results = { name, lastName, roleID };

  const res = await makePUT(`${ENDPOINT_USER}/${id}`, {
    first_name: name,
    last_name: lastName,
    roleId: roleID
  });

  if (res.id) {
    setTypeMSJ('success');
    if (id === 'me') store.dispatch(getLoggedUser(res));
  } else {
    setTypeMSJ('error');
  }

  setSubmit(false);
};

export default submit;
