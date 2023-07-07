import { ref } from 'vue';
import { fetchMeetups } from '../api.js';

export async function useMeetupsFetch() {
  const meetups = ref(null);

  meetups.value = await fetchMeetups();

  return {
    meetups,
  };
}
