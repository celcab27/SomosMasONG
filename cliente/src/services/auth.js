/** @module services/auth */
import { setToken, deleteToken } from './tokenHandler';
import store from 'redux/store';
import { getLoggedUser, userLogout } from 'redux/user/actions/user';
/**
 * Function to login a user from client.
 * @async
 * @function login
 * @param {Function} results - Result for make a request.
 * @example
 * import { login } from "services/auth";
 * login(res);
 */
export const login = ( results ) => {
  setToken(results.token);
  store.dispatch(getLoggedUser(results.user));
};
/**
 * Function to logout a user from client.
 * @async
 * @function logout
 * @example
 * import { logout } from "services/auth";
 * logout();
 */
export const logout = () => {
  deleteToken();
  store.dispatch(userLogout());
};
