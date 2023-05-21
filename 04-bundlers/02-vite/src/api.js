/** URL адрес API */
export const API_URL = import.meta.env.VITE_API_URL;

/**
 * Получает список митапов с API
 * @return {Promise}
 */
export async function fetchMeetups() {
  return fetch(`${API_URL}/meetups`).then((res) => res.json());
}
