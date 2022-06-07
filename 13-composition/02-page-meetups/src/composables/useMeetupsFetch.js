import { onMounted, ref } from 'vue';
import { fetchMeetups } from '../api.js';

export function useMeetupsFetch() {
  const meetups = ref(null);

  onMounted(() => {
    fetchMeetups().then((response) => {
      meetups.value = response;
    });
  });

  return { meetups };
}
