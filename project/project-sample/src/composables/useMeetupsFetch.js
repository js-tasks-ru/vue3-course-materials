import { onMounted, ref } from 'vue';
import { getMeetups } from '../api/meetupsApi.js';

export function useMeetupsFetch() {
  const meetups = ref(null);

  onMounted(async () => {
    meetups.value = (await getMeetups()).data;
  });

  return {
    meetups,
  };
}
