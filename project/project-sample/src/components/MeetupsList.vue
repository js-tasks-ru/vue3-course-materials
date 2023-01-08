<template>
  <ul class="meetups-list">
    <li v-for="meetup in meetups" :key="meetup.id" class="meetups-list__item">
      <RouterLink
        :to="{ name: 'meetup', params: { meetupId: meetup.id } }"
        class="meetups-list__item-link"
        tabindex="0"
      >
        <MeetupCard :meetup="meetup" />
      </RouterLink>
    </li>
  </ul>
</template>

<script>
// TODO: Добавить <UiTransitionGroupFade>
import MeetupCard from './MeetupCard.vue';

export default {
  name: 'MeetupsList',

  components: {
    MeetupCard,
  },

  props: {
    meetups: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
/* _meetups-list.css */
.meetups-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.meetups-list__item {
  margin: 0 0 32px 0;
  text-decoration: none;
}

.meetups-list__item-link {
  text-decoration: none;
  color: inherit;
}
</style>
