/** URL адрес API */
export const API_URL = 'https://course-vue.javascript.ru/api';

/**
 * Получает список митапов с API
 * @return {Promise}
 */
export async function fetchMeetups() {
  return fetch(`${API_URL}/meetups`).then((res) => res.json());
}
