<template>
  <ul class="meetups-list">
    <li v-for="meetup in meetups" :key="meetup.id" class="meetups-list__item">
      <a :href="`/meetups/${meetup.id}`" class="meetups-list__item-link" tabindex="0">
        <MeetupCard :meetup="meetup" />
      </a>
    </li>
  </ul>
</template>

<script>
import MeetupCard from '@/components/MeetupCard.vue';

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
