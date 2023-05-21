<template>
  <UiContainer>
    <div class="filters-panel">
      <div class="filters-panel__col">
        <UiRadioGroup v-model="filter.date" :options="$options.dateFilterOptions" name="date" />
      </div>

      <div class="filters-panel__col">
        <div class="form-group form-group_inline">
          <div class="input-group input-group_icon input-group_icon-left">
            <div class="input-group__icon">
              <UiIcon icon="search" />
            </div>

            <input
              v-model.trim="filter.search"
              class="form-control form-control_rounded form-control_sm"
              placeholder="Поиск"
              type="search"
            />
          </div>
        </div>
        <div class="form-group form-group_inline">
          <UiButtonGroup v-model:view="view" />
        </div>
      </div>
    </div>

    <template v-if="meetups">
      <template v-if="filteredMeetups.length">
        <MeetupsList v-if="view === 'list'" :meetups="filteredMeetups" />
        <MeetupsCalendar v-else-if="view === 'calendar'" :meetups="filteredMeetups" />
      </template>
      <UiAlert v-else>Митапов по заданным условиям не найдено...</UiAlert>
    </template>
    <UiAlert v-else>Загрузка...</UiAlert>
  </UiContainer>
</template>

<script>
import MeetupsList from '@/components/MeetupsList.vue';
import MeetupsCalendar from '@/components/MeetupsCalendar.vue';
import UiRadioGroup from '@/components/UiRadioGroup.vue';
import UiButtonGroup from '@/components/UiButtonGroup.vue';
import UiContainer from '@/components/UiContainer.vue';
import UiAlert from '@/components/UiAlert.vue';
import UiIcon from '@/components/UiIcon.vue';
import { fetchMeetups } from '@/api';

export default {
  name: 'PageMeetups',

  dateFilterOptions: [
    { text: 'Все', value: 'all' },
    { text: 'Прошедшие', value: 'past' },
    { text: 'Ожидаемые', value: 'future' },
  ],

  components: {
    MeetupsList,
    MeetupsCalendar,
    UiRadioGroup,
    UiButtonGroup,
    UiContainer,
    UiAlert,
    UiIcon,
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
  },

  async mounted() {
    this.meetups = await fetchMeetups();
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
