<template>
  <ui-card :cover="meetup.image" class="meetup-card">
    <template #header>
      {{ meetup.title }}
    </template>

    <template #default>
      <ui-badge v-if="meetup.organizing" type="success" class="meetup-card__badge">Организую</ui-badge>
      <ui-badge v-if="meetup.attending" type="primary" class="meetup-card__badge">Участвую</ui-badge>
      <ul class="meetup-info">
        <li class="meetup-info__item">
          <ui-icon icon="user" class="meetup-info__icon" />
          {{ meetup.organizer }}
        </li>
        <li class="meetup-info__item">
          <ui-icon icon="map" class="meetup-info__icon" />
          {{ meetup.place }}
        </li>
        <li class="meetup-info__item">
          <ui-icon icon="cal-lg" class="meetup-info__icon" />
          <time :datetime="formatAsIsoDate(meetup.date)">{{ formatAsLocalDate(meetup.date) }}</time>
        </li>
      </ul>
    </template>
  </ui-card>
</template>

<script>
import UiBadge from '@/components/UiBadge.vue';
import UiCard from '@/components/UiCard.vue';
import UiIcon from '@/components/UiIcon.vue';

export default {
  name: 'MeetupsListItem',

  components: {
    UiBadge,
    UiCard,
    UiIcon,
  },

  props: {
    meetup: {
      type: Object,
      required: true,
    },
  },

  methods: {
    formatAsIsoDate(timestamp) {
      return new Date(timestamp).toISOString().split('T')[0];
    },

    formatAsLocalDate(timestamp) {
      return new Date(timestamp).toLocaleString(navigator.language, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    },
  },
};
</script>

<style scoped>
.meetup-card {
  position: relative;
}

.meetup-card__badge {
  position: absolute;
  top: 0;
  right: 0;
}

/* meetup-info */
.meetup-info {
  margin: 0;
  padding: 0;
}

.meetup-info__item {
  list-style-type: none;
  position: relative;
  padding-left: 36px;
  font-size: 18px;
  line-height: 28px;
  margin: 0 0 8px;
}

.meetup-info__item:last-child {
  margin: 0;
}

.meetup-info__icon {
  position: absolute;
  left: 0;
  top: 0;
}
</style>
