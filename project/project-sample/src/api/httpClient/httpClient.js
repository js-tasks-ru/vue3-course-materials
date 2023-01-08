import axios from 'axios';
import { createErrorResult, createSuccessResult } from './ResultContainer.js';

export const httpClient = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  withCredentials: true,
  validateStatus(status) {
    /*
      401 Unauthenticated
      405 Method Not Allowed
      408 Request Timeout
      429 Too Many Requests
     */
    return ![401, 405, 408, 429].includes(status) && status < 500;
  },
});

httpClient.interceptors.response.use(
  (response) => {
    // Превращаем результат в контейнер результата
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
    if ((!error.response || error.code === 'ECONNABORTED') && httpClient._onNetworkError) {
      httpClient._onNetworkError();
    } else if (error.response.statusCode === 401 && httpClient._onAuthenticatedHandler) {
      httpClient._onAuthenticatedHandler();
    } else {
      return Promise.reject(error);
    }
  },
);

// Добавляем возможность устанавливать обработчики некоторых ошибок API
httpClient.onUnauthenticated = (handler) => {
  httpClient._onAuthenticatedHandler = handler;
};

httpClient.onNetworkError = (handler) => {
  httpClient._onNetworkError = handler;
};
