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
          <ui-icon class="meetup-info__icon" icon="user" />
          {{ meetup.organizer }}
        </li>
        <li class="meetup-info__item">
          <ui-icon class="meetup-info__icon" icon="map" />
          {{ meetup.place }}
        </li>
        <li class="meetup-info__item">
          <ui-icon class="meetup-info__icon" icon="cal-lg" />
          <time :datetime="isoDate">{{ localeDate }}</time>
        </li>
      </ul>
    </template>
  </ui-card>
</template>

<script>
import UiBadge from './UiBadge';
import UiCard from './UiCard';
import UiIcon from './UiIcon';

export default {
  name: 'MeetupsListItem',

  components: {
    UiIcon,
    UiBadge,
    UiCard,
  },

  props: {
    meetup: {
      type: Object,
      required: true,
    },
  },

  computed: {
    isoDate() {
      return new Date(this.meetup.date).toISOString().split('T')[0];
    },

    localeDate() {
      return new Date(this.meetup.date).toLocaleString(navigator.language, {
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
