export const agendaItemDefaultTitles = {
  registration: 'Регистрация',
  opening: 'Открытие',
  break: 'Перерыв',
  coffee: 'Coffee Break',
  closing: 'Закрытие',
  afterparty: 'Afterparty',
  talk: 'Доклад',
  other: 'Другое',
};

/**
 * Словарь иконок для всех типов пунктов программы.
 * Соответствует имени иконок в директории /assets/icons
 */
export const agendaItemIcons = {
  registration: 'key',
  opening: 'cal-sm',
  talk: 'tv',
  break: 'clock',
  coffee: 'coffee',
  closing: 'key',
  afterparty: 'cal-sm',
  other: 'cal-sm',
};

export const agendaItemOptions = Object.entries(agendaItemDefaultTitles).map(([type, title]) => ({
  value: type,
  text: title,
  icon: agendaItemIcons[type],
}));

export const talkLanguageOptions = [
  { value: null, text: 'Не указано' },
  { value: 'RU', text: 'RU' },
  { value: 'EN', text: 'EN' },
];

let lastMeetupId = 0;
/**
 * @return {Meetup}
 */
export function createMeetup() {
  return {
    id: --lastMeetupId,
    title: '',
    description: '',
    imageId: null,
    image: null,
    date: +new Date().setUTCHours(0, 0, 0, 0),
    place: '',
    agenda: [],
  };
}

let lastAgendaItemId = 0;
/**
 * @return {AgendaItem}
 */
export function createAgendaItem() {
  return {
    id: --lastAgendaItemId,
    startsAt: '00:00',
    endsAt: '00:00',
    type: 'other',
    title: null,
    description: null,
    speaker: null,
    language: null,
  };
}
