import { httpClient } from './httpClient';

/**
 * Request meetups list
 * @returns {Promise<ResultContainer<any>>}
 */
export function getMeetups() {
  return httpClient.get('/meetups');
}

/**
 * Request meetup by id
 * @param {number} id
 * @returns {Promise<ResultContainer<any>>}
 */
export function getMeetup(id) {
  return httpClient.get(`/meetups/${id}`);
}
