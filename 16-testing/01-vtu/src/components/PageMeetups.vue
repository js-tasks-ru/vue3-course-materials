<template>
  <UiContainer>
    <div class="filters-panel">
      <div class="filters-panel__col">
        <UiRadioGroup v-model="filter.date" :options="$options.dateFilterOptions" name="date" />
      </div>

      <div class="filters-panel__col">
        <div class="form-group form-group_inline">
          <UiInput v-model.trim="filter.search" rounded small placeholder="Поиск" type="search">
            <template #left-icon>
              <ui-icon icon="search" />
            </template>
          </UiInput>
        </div>
        <div class="form-group form-group_inline">
          <UiButtonGroup v-model:view="view" />
        </div>
      </div>
    </div>

    <KeepAlive v-if="meetups" include="MeetupsCalendar">
      <component :is="viewComponent" v-if="filteredMeetups.length" :meetups="filteredMeetups" />
      <UiAlert v-else>Митапов по заданным условиям не найдено...</UiAlert>
    </KeepAlive>
    <UiAlert v-else>Загрузка...</UiAlert>
  </UiContainer>
</template>

<script>
import MeetupsList from './MeetupsList.vue';
import MeetupsCalendar from './MeetupsCalendar.vue';
import UiRadioGroup from './UiRadioGroup.vue';
import UiButtonGroup from './UiButtonGroup.vue';
import UiContainer from './UiContainer.vue';
import UiAlert from './UiAlert.vue';
import UiIcon from './UiIcon.vue';
import { fetchMeetups } from '../api';
import UiInput from './UiInput.vue';

export default {
  name: 'PageMeetups',

  dateFilterOptions: [
    { text: 'Все', value: 'all' },
    { text: 'Прошедшие', value: 'past' },
    { text: 'Ожидаемые', value: 'future' },
  ],

  components: {
    UiInput,
    UiIcon,
    UiRadioGroup,
    UiButtonGroup,
    UiContainer,
    UiAlert,
  },

  data() {
    return {
      meetups: null,

      filter: {
        date: 'all',
        participation: 'all',
        search: '',
      },

      view: 'list',
    };
  },

  computed: {
    filteredMeetups() {
      if (!this.meetups) {
        return null;
      }

      const dateFilter = (meetup) =>
        this.filter.date === 'all' ||
        (this.filter.date === 'past' && new Date(meetup.date) <= new Date()) ||
        (this.filter.date === 'future' && new Date(meetup.date) > new Date());

      const participationFilter = (meetup) =>
        this.filter.participation === 'all' ||
        (this.filter.participation === 'organizing' && meetup.organizing) ||
        (this.filter.participation === 'attending' && meetup.attending);

      const searchFilter = (meetup) =>
        [meetup.title, meetup.description, meetup.place, meetup.organizer]
          .join(' ')
          .toLowerCase()
          .includes(this.filter.search.toLowerCase());

      return this.meetups.filter((meetup) => dateFilter(meetup) && participationFilter(meetup) && searchFilter(meetup));
    },

    viewComponent() {
      const viewToComponents = {
        list: MeetupsList,
        calendar: MeetupsCalendar,
      };
      return viewToComponents[this.view];
    },
  },

  mounted() {
    fetchMeetups().then((meetups) => {
      this.meetups = meetups;
    });
  },
};
</script>

<style scoped>
.filters-panel {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 40px 0 32px 0;
}

.filters-panel__col {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}

@media all and (max-width: 767px) {
  .filters-panel {
    flex-direction: column;
  }

  .filters-panel__col + .filters-panel__col {
    margin-top: 16px;
  }
}
</style>
