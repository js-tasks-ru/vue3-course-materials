let lastMeetupId = 0;
export function create() {
  return {
    id: --lastMeetupId,
    title: '',
    description: '',
    imageId: null,
    date: +new Date().setUTCHours(0, 0, 0, 0),
    place: '',
    agenda: [],
  };
}

let lastAgendaItemId = 0;
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
