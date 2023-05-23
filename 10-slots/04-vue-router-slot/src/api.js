/** URL адрес API */
// export const API_URL = process.env.VUE_APP_API_URL;
export const API_URL = 'https://course-vue.javascript.ru/api';

/**
 * Получает список митапов с API
 * @return {Promise}
 */
export async function fetchMeetups() {
  return fetch(`${API_URL}/meetups`).then((res) => res.json());
}

/**
 * Получает митап с API по ID
 * @param {number} meetupId
 * @return {Promise}
 */
export async function fetchMeetup(meetupId) {
  return fetch(`${API_URL}/meetups/${meetupId}`).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return res.json().then((error) => Promise.reject(error));
    }
  });
}
