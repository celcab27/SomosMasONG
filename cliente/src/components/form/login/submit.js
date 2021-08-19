/** @module Form/Login */
import { makePOST } from 'services/httpRequest';
import { ENDPOINT_LOGIN } from 'services/settings';
import { login } from "services/auth";
/**
 * Function submit default of component Form Login. If login is correct, redirect to "/", else we change state of funcion callback "setShowError" to true.
 * @function submit
 * @param {Object} values - A object with all params sanitized by formik.
 * @param {Function} setSubmit - A function to handle states of submit in this moment or not.
 * @param {Function} setShowError - A function to handle show alert/text/etc of error or not.
 * @param {Function} redirect - A function to invoke a redirect with router select by devs.
 * @example
 * import FormLogin from "components/form/login/FormLogin.js"
 * import submit from "components/form/login/submit.js";
 * <FormLogin /> // Default version use this module, that is implicit.
 * <FormLogin changeSubmit={submit} /> // This is explicit.
 */
const submit = async (
  { email, password },
  setSubmit,
  setShowError,
  redirect,
) => {
  const result = await makePOST(ENDPOINT_LOGIN, {
    email,
    password,
  });
  if (result.token) {
    login(result);
    setSubmit(false);
    redirect('/');
    window.location.reload();
  }
  else if (!result.ok) setShowError(true);
  setSubmit(false);
};

export default submit;
