import { defineStore } from 'pinia';

export const useMeetupFormStore = defineStore('meetupFormStore', {
  state: () => ({
    meetup: null,
  }),

  actions: {
    setMeetup(meetup) {
      this.meetup = meetup;
    },

    setMeetupField({ field, value }) {
      this.meetup[field] = value;
    },

    addAgendaItem(newItem) {
      this.meetup.agenda.push(newItem);
    },

    removeAgendaItem(index) {
      this.meetup.agenda.splice(index, 1);
    },

    setAgendaItemField({ index, field, value }) {
      this.meetup.agenda[index][field] = value;
    },
  },
});
