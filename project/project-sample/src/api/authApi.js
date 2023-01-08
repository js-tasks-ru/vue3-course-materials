import { httpClient } from './httpClient/httpClient.js';

/**
 * Получить текущего пользователя
 * @returns {Promise<ResultContainer<User>>}
 */
export function getUser() {
  // TODO: реализовать функцию
}

/**
 * Авторизоваться по email и паролю
 * @param {string} email
 * @param {string} password
 * @returns {Promise<ResultContainer<User>>}
 */
export function loginUser(email, password) {
  return httpClient.post('/auth/login', { email, password });
}

/**
 * Зарегистрировать пользователя
 * @param {Object} user
 * @returns {Promise<ResultContainer<User>>}
 */
export function registerUser(user) {
  // TODO: реализовать функцию
}

/**
 * Разлогинить пользователя сессии
 * @returns {Promise<ResultContainer<void>>}
 */
export function logoutUser() {
  // TODO: реализовать функцию
}
