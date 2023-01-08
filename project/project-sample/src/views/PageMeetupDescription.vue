<template>
  <MeetupDescription :description="meetup.description" />
</template>

<script>
import MeetupDescription from '../components/MeetupDescription.vue';

export default {
  name: 'PageMeetupDescription',
  components: { MeetupDescription },

  props: {
    meetup: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped></style>
