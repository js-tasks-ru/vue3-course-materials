/** URL адрес API */
export const API_URL = '/api';

/**
 * Получает список митапов с API
 * @return {Promise}
 */
export async function fetchMeetups() {
  return fetch(`${API_URL}/meetups.json`).then((res) => res.json());
}
