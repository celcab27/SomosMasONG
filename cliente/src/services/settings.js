/** @module services */
/**
 * Constant with BASE URL to make requests.
 * @constant
 * @readonly
 */
const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000/api';
/**
 * Constant with ENDPOINT to register.
 * @constant
 * @readonly
 */
export const ENDPOINT_REGISTER = `${BASE_URL}/auth/register`;
/**
 * Constant with ENDPOINT to login.
 * @constant
 * @readonly
 */
export const ENDPOINT_LOGIN = `${BASE_URL}/auth/login`;
/**
 * Constant with ENDPOINT to organizations.
 * @constant
 * @readonly
 */
export const ENDPOINT_ORGANIZATION = `${BASE_URL}/organizations/1/public`;
/**
 * Constant with ENDPOINT to contacts.
 * @constant
 * @readonly
 */
export const ENDPOINT_CONTACTS = `${BASE_URL}/contacts`;
/**
 * Constant with ENDPOINT to users.
 * @constant
 * @readonly
 */
export const ENDPOINT_USER = `${BASE_URL}/users`;
/**
 * Constant with ENDPOINT to news.
 * @constant
 * @readonly
 */
export const ENDPOINT_NEWS = `${BASE_URL}/news`;
/**
 * Constant with ENDPOINT to auth me.
 * @constant
 * @readonly
 */
export const ENDPOINT_GETLOGGED = `${BASE_URL}/auth/me`;

/**
 * Constant with ENDPOINT to activities.
 * @constant
 * @readonly
 */

export const ENDPOINT_ACTIVITIES = `${BASE_URL}/activities`;

/**
 * Constant with ENDPOINT to category.
 * @constant
 * @readonly
 */
export const ENDPOINT_CATEGORY = `${BASE_URL}/categories`;

/**
 * Constant with ENDPOINT to testimony.
 * @constant
 * @readonly
 */
export const ENDPOINT_GETTESTIMONIALS = `${BASE_URL}/testimonials`;

/**
 * Constant with ENDPOINT to members.
 * @constant
 * @readonly
 */
export const ENDPOINT_MEMBERS = `${BASE_URL}/members`;
/**
 * Constant with ENDPOINT to members.
 * @constant
 * @readonly
 */
export const ENDPOINT_PUBLICDATA = `${BASE_URL}/organizations/1/public`;
