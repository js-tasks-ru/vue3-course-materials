/**
 * @typedef {(SuccessResultContainer<T>|ErrorResultContainer)} ResultContainer
 * @template T
 */

/**
 * @typedef SuccessResultContainer
 * @property {true} success
 * @property {T} data
 * @property {null} error
 * @property {import('axios').AxiosResponse} response
 * @template T
 */

/**
 * @typedef ErrorResultContainer
 * @property {false} success
 * @property {null} data
 * @property {ResultError} error
 * @property {import('axios').AxiosResponse} response
 */

/**
 * @typedef ResultError
 * @property {number} statusCode
 * @property {string} message
 * @mixes {any}
 */

export const createResultContainer = (data, error, response) => ({
  success: !error,
  error,
  data,
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
