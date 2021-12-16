import axios from 'axios';
import { createErrorResult, createSuccessResult } from './ResultContainer';
import { NetworkError } from './NetworkError.js';

export const httpClient = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  validateStatus(status) {
    /*
      405 Method Not Allowed
      408 Request Timeout
      429 Too Many Requests
     */
    return ![408, 413, 429].includes(status) && status < 500;
  },
});

httpClient.interceptors.response.use(
  (response) => {
    if (response.status >= 400) {
      return createErrorResult(
        {
          statusCode: response.status,
          message: response.data.message ?? response.data ?? response.statusText,
        },
        response,
      );
    } else {
      return createSuccessResult(response.data, response);
    }
  },
  (error) => {
    if (!error.response || error.code === 'ECONNABORTED') {
      return Promise.reject(new NetworkError(error.request));
    } else {
      return Promise.reject(error);
    }
  },
);

// httpClient.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (!error.response || error.code === 'ECONNABORTED') {
//       return Promise.reject(new NetworkError(error.request));
//     } else {
//       return Promise.reject(error);
//     }
//   },
// );
