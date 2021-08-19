/**
 * @module services
 */


const TOKEN_KEY = 'SomosMasONG';

/**
 * Function for save the token in local storage
 * @function setToken
 * @param {String} token
 * @example
 * import { setToken } from './services/tokenHandler'
 * ...
 * setToken(token)
 */
export function setToken(token) {
  localStorage.setItem(TOKEN_KEY, token);
}
/**
 * Function for get the token from local storage
 * @function getToken
 * @returns token
 * @example
 * import { getToken } from './services/tokenHandler'
 * ...
 * const token = getToken()
 */
export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}
/**
 * Function for delete the token in local storage
 * @function deleteToken
 * @example
 * import { deleteToken } from './services/tokenHandler
 * ...
 * deleteToken()
 */
export function deleteToken() {
  localStorage.removeItem(TOKEN_KEY);
}
