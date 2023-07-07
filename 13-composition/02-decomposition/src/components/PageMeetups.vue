<template>
  <UiContainer>
    <div class="filters-panel">
      <div class="filters-panel__col">
        <UiRadioGroup v-model="filter.date" :options="dateFilterOptions" name="date" />
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

    <KeepAlive v-if="meetups" include="MeetupsCalendar">
      <component :is="viewComponent" v-if="filteredMeetups.length" :meetups="filteredMeetups" />
      <UiAlert v-else>Митапов по заданным условиям не найдено...</UiAlert>
    </KeepAlive>
    <UiAlert v-else>Загрузка...</UiAlert>
  </UiContainer>
</template>

<script>
import { computed, onMounted, ref } from 'vue';
import MeetupsList from './MeetupsList.vue';
import MeetupsCalendar from './MeetupsCalendar.vue';
import UiRadioGroup from './UiRadioGroup.vue';
import UiButtonGroup from './UiButtonGroup.vue';
import UiContainer from './UiContainer.vue';
import UiAlert from './UiAlert.vue';
import UiIcon from './UiIcon.vue';
import { fetchMeetups } from '../api.js';

// Constants
const dateFilterOptions = [
  { text: 'Все', value: 'all' },
  { text: 'Прошедшие', value: 'past' },
  { text: 'Ожидаемые', value: 'future' },
];

export default {
  name: 'PageMeetups',

  components: {
    UiIcon,
    UiRadioGroup,
    UiButtonGroup,
    UiContainer,
    UiAlert,
  },

  setup() {
    // Data
    const meetups = ref(null);
    const filter = ref({
      date: 'all',
      participation: 'all',
      search: '',
    });
    const view = ref('list');

    // Computed
    const filteredMeetups = computed(() => {
      const dateFilter = (meetup) =>
        filter.value.date === 'all' ||
        (filter.value.date === 'past' && new Date(meetup.date) <= new Date()) ||
        (filter.value.date === 'future' && new Date(meetup.date) > new Date());

      const participationFilter = (meetup) =>
        filter.value.participation === 'all' ||
        (filter.value.participation === 'organizing' && meetup.organizing) ||
        (filter.value.participation === 'attending' && meetup.attending);

      const searchFilter = (meetup) =>
        [meetup.title, meetup.description, meetup.place, meetup.organizer]
          .join(' ')
          .toLowerCase()
          .includes(filter.value.search.toLowerCase());

      return meetups.value.filter(
        (meetup) => dateFilter(meetup) && participationFilter(meetup) && searchFilter(meetup),
      );
    });

    const viewComponent = computed(() => {
      const viewToComponents = {
        list: MeetupsList,
        calendar: MeetupsCalendar,
      };
      return viewToComponents[view.value];
    });

    // Lifecycle Hooks
    onMounted(async () => {
      meetups.value = await fetchMeetups();
    });

    return {
      meetups,
      filter,
      filteredMeetups,
      view,
      viewComponent,
      // Constant
      dateFilterOptions,
    };
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
