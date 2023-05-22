/**
 * @typedef {(SuccessResultContainer|ErrorResultContainer)} ResultContainer
 */

/**
 * @typedef SuccessResultContainer
 * @property {boolean} [success=true]
 * @property result
 * @property {null} error
 * @property {import('axios').AxiosResponse} response
 */

/**
 * @typedef ErrorResultContainer
 * @property {Boolean} [success=false]
 * @property {null} result
 * @property {ResultError} error
 * @property {import('axios').AxiosResponse} response
 */

/**
 * @typedef ResultError
 * @property {number} statusCode
 * @property {string} message
 * @mixes {any}
 */

export const createResultContainer = (result, error, response) => ({
  success: !error,
  error,
  result,
  response,
});

/**
 * @param result
 * @param {import('axios').AxiosResponse} response
 * @returns {SuccessResultContainer}
 */
export const createSuccessResult = (result, response) => createResultContainer(result, null, response);

/**
 * @param {ResultError} error
 * @param {import('axios').AxiosResponse} response
 * @returns {ErrorResultContainer}
 */
export const createErrorResult = (error, response) => createResultContainer(null, error, response);
