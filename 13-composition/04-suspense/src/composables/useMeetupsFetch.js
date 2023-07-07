import { onMounted, ref } from 'vue';
import { fetchMeetups } from '../api.js';

export function useMeetupsFetch() {
  const meetups = ref(null);

  onMounted(async () => {
    meetups.value = await fetchMeetups();
  });

  // Если компосабл по своей сути не возвращает ровно одно значение,
  // лучше возвращать объект и потом декомпозировать
  return {
    meetups,
  };
}
