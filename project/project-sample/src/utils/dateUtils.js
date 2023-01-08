/**
 * Форматировать дату в строку в формате YYYY-MM-DD
 * @param {number} date - UNIX Timestamp
 * @return {string}
 */
export const formatAsIsoDate = (date) => new Date(date).toISOString().substring(0, 10);

/**
 * Форматировать дату локализовано
 * @param {number} date - UNIX Timestamp
 * @return {string}
 */
export const formatAsLocalDate = (date) =>
  new Date(date).toLocaleString(navigator.language, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
