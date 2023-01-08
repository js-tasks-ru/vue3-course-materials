import { computed, onMounted, unref, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import { useApi } from './useApi.js';
import { getMeetup } from '../api/meetupsApi.js';

export function useMeetupFetch(meetupId) {
  const { request, result } = useApi(getMeetup);
  const meetup = computed(() => result.value?.data);
  const error = computed(() => result.value?.error);
  const router = useRouter();

  onMounted(async () => {
    watchEffect(async () => {
      await request(unref(meetupId));
      if (!result.value.success) {
        router.push({ name: 'meetups' });
      }
    });
  });

  return {
    meetup,
    error,
  };
}
