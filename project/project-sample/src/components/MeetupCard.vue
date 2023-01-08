<template>
  <UiCard tag="article" :cover="meetup.image" class="meetup-card">
    <template #header>
      {{ meetup.title }}
    </template>

    <template #default>
      <UiBadge v-if="meetup.organizing" type="success" class="meetup-card__badge">Организую</UiBadge>
      <UiBadge v-if="meetup.attending" type="primary" class="meetup-card__badge">Участвую</UiBadge>
      <MeetupInfo :date="meetup.date" :place="meetup.place" :organizer="meetup.organizer" />
    </template>
  </UiCard>
</template>

<script>
import UiBadge from './UiBadge.vue';
import UiCard from './UiCard.vue';
import MeetupInfo from './MeetupInfo.vue';

export default {
  name: 'MeetupCard',

  components: {
    MeetupInfo,
    UiBadge,
    UiCard,
  },

  props: {
    meetup: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
/* _meetup-card.css */

.meetup-card {
  position: relative;
}

.meetup-card__badge {
  position: absolute;
  top: 0;
  right: 0;
}
</style>
