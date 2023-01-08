<template>
  <div class="page-meetup">
    <MeetupView v-if="meetup" :meetup="meetup">
      <UiTabs>
        <template #tabs>
          <UiTab :to="{ name: 'meetup.description' }">Описание</UiTab>
          <UiTab :to="{ name: 'meetup.agenda' }">Программа</UiTab>
        </template>
        <template #default>
          <RouterView :meetup="meetup" />
        </template>
      </UiTabs>
    </MeetupView>

    <UiContainer v-else-if="error">
      <UiAlert>{{ error }}</UiAlert>
    </UiContainer>

    <UiContainer v-else>
      <UiAlert>Загрузка...</UiAlert>
    </UiContainer>
  </div>
</template>

<script>
import { ref, watch } from 'vue';
import MeetupView from '../components/MeetupView.vue';
import UiContainer from '../components/UiContainer.vue';
import UiAlert from '../components/UiAlert.vue';
import UiTabs from '../components/UiTabs.vue';
import UiTab from '../components/UiTab.vue';
import { getMeetup } from '../api/meetupsApi.js';

export default {
  name: 'PageMeetup',

  components: {
    UiTab,
    UiTabs,
    MeetupView,
    UiAlert,
    UiContainer,
  },

  async beforeRouteEnter(to) {
    const result = await getMeetup(+to.params.meetupId);
    if (result.success) {
      return (vm) => {
        vm.setMeetup(result.data);
      };
    } else {
      return { name: 'meetups' };
    }
  },

  props: {
    meetupId: {
      type: Number,
      required: true,
    },
  },

  setup(props) {
    // TODO: Установить <title> - "<название митапа> | Meetups"
    const meetup = ref(null);
    const error = ref(null);

    const fetchMeetup = async () => {
      meetup.value = null;
      error.value = null;

      const result = await getMeetup(props.meetupId);
      if (result.success) {
        meetup.value = result.data;
      } else {
        error.value = result.error.message;
      }
    };

    watch(() => props.meetupId, fetchMeetup);

    const setMeetup = (value) => (meetup.value = value);

    return {
      meetup,
      error,
      setMeetup,
    };
  },
};
</script>

<style scoped></style>
