/**
 * @typedef Meetup
 * @property {number} id
 * @property {string} title
 * @property {string} description
 * @property {number} imageId
 * @property {string} image
 * @property {number} date
 * @property {string} organizer
 * @property {string} place
 * @property {AgendaItem[]} agenda
 */

/**
 * @typedef AgendaItem
 * @property {number} id
 * @property {string} startsAt
 * @property {string} endsAt
 * @property {AgendaItemType} type
 * @property {string|null} title
 * @property {string|null} description
 * @property {string|null} speaker
 * @property {string|null} language
 */

/**
 * @typedef AgendaItemType {(registration|opening|talk|break|coffee|closing|afterparty|other)}
 */

/**
 * @typedef User
 * @property {number} id
 * @property {string} email
 * @property {string} fullname
 * @property {string} avatar
 */

/**
 * @typedef ImageDto
 * @property {number} id - ID изображения
 * @property {string} image - абсолютная ссылка на изображение
 */
