/** @module services/http */
import { getToken } from './tokenHandler';
/**
 * Constant to set TOKEN JWT.
 * @constant
 */
const TOKENJWT = getToken();
/**
 * Function to build a base fetcher.
 * @async
 * @function fetcher
 * @param {String} APIURL - An endpoint for fetcher.
 */
const fetcher = async (APIURL, verb, body) => {
  try {
    const res = await fetch(APIURL, {
      method: verb,
      headers: {
        'Content-Type': 'application/json',
        Authorization: TOKENJWT,
      },
      body: body ? JSON.stringify(body) : null,
    });
    if (!res.ok) {
      const error = new Error('An error occurred while fetching the data.');
      error.info = await res.json();
      error.status = res.status;
      return error;
    }
    return res.status === 204 ? true : res.json();
  } catch (error) {
    return error;
  }
};
/**
 * Function to make a generic request GET.
 * @async
 * @function makeGET
 * @param {String} APIURL - An endpoint for this request.
 * @example
 * import { makeGET } from "services/httpRequest";
 * import { ENDPOINT_ALLCONTACTS } from "services/settings";
 * const result = await makeGET(ENDPOINT_ALLCONTACTS);
 * @returns {Object} Returns a result of promise with fetch.
 */
export const makeGET = async (APIURL) => {
  const result = await fetcher(APIURL, 'GET', null);
  return result;
};
/**
 * Function to make a generic request POST.
 * @function makePOST
 * @param {String} APIURL - An endpoint for this request.
 * @param {Object} body - An object with the body of request.
 * @example
 * import { makePOST } from 'services/httpRequest';
 * const myBodyRequest = {
 *  firstName: "Scarlett",
 *  lastName: "Johansson",
 *  mail: "scarsson@gmail.com",
 *  password: "blackwidow"
 * }
 * const result = await makePOST("http://localhost:4000/api/auth/register", myBodyRequest);
 * @returns {Object} Returns a result of promise with fetch.
 */
export const makePOST = async (APIURL, body) => {
  const result = await fetcher(APIURL, 'POST', body);
  return result;
};
/**
 * Function to make a generic request PUT.
 * @function makePUT
 * @param {String} APIURL - An endpoint for this request.
 * @param {Object} body - An object with the body of request.
 * @example
 * import { makePUT } from 'services/httpRequest';
 * const myBodyRequest = {
 *  firstName: "Black",
 *  lastName: "Widow",
 *  password: "blackwidow"
 * }
 * const result = await makePUT("http://localhost:4000/api/auth/updatereg", myBodyRequest);
 * @returns {Object} Returns a result of promise with fetch.
 */
export const makePUT = async (APIURL, body) => {
  const result = await fetcher(APIURL, 'PUT', body);
  return result;
};
/**
 * Function to make a generic request PATCH.
 * @function makePATCH
 * @param {String} APIURL - An endpoint for this request.
 * @param {Object} body - An object with the body of request.
 * @example
 * import { makePATCH } from 'services/httpRequest';
 * const result = await makePATCH("http://localhost:4000/api/auth/patchreg", {password: "blackwidow"});
 * @returns {Object} Returns a result of promise with fetch.
 */
export const makePATCH = async (APIURL, body) => {
  const result = await fetcher(APIURL, 'PATCH', body);
  return result;
};
/**
 * Function to make a generic request DELETE.
 * @function makeDELETE
 * @param {String} APIURL - An endpoint for this request.
 * @param {Object} body - An object with the body of request.
 * @example
 * import { makeDELETE } from 'services/httpRequest';
 * const result = await makeDELETE("http://localhost:4000/api/deleteuser");
 * @returns {Object} Returns a result of promise with fetch.
 */
export const makeDELETE = async (APIURL, body) => {
  const result = await fetcher(APIURL, 'DELETE', body);
  return result;
};
