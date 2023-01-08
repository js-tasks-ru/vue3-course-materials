<template>
  <MeetupAgenda v-if="meetup.agenda.length" :agenda="meetup.agenda" />
  <UiAlert v-else>Программа пока пуста...</UiAlert>
</template>

<script>
import MeetupAgenda from '../components/MeetupAgenda.vue';
import UiAlert from '../components/UiAlert.vue';

export default {
  name: 'PageMeetupAgenda',

  components: { UiAlert, MeetupAgenda },

  props: {
    meetup: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped></style>
