import { fetchMeetups } from '../api.js';

export const pageMeetupsFetch = {
  data() {
    return {
      meetups: null,
    };
  },

  mounted() {
    fetchMeetups().then((meetups) => {
      this.meetups = meetups;
    });
  },
};
