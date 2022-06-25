import { defineComponent } from '../vendor/vue.esm-browser.js';
import UiRadioGroup from './UiRadioGroup.js';
import MeetupsList from './MeetupsList.js';
import UiContainer from './UiContainer.js';
import MeetupsCalendar from './MeetupsCalendar.js';
import UiAlert from './UiAlert.js';
import UiButtonGroup from './UiButtonGroup.js';

const fetchMeetups = () => fetch('./api/meetups.json').then((res) => res.json());

export default defineComponent({
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

  mounted() {
    fetchMeetups().then((meetups) => {
      this.meetups = meetups;
    });
  },

  template: `
    <ui-container>
      <div class="filters-panel">
        <div class="filters-panel__col">
          <ui-radio-group v-model="filter.date" :options="$options.dateFilterOptions"  />
        </div>

        <div class="filters-panel__col">
          <div class="form-group form-group_inline">
            <div class="input-group input-group_icon input-group_icon-left">
              <div class="input-group__icon">
                <img class="icon" src="/assets/icons/icon-search.svg" alt="search" />
              </div>

              <input
                class="form-control form-control_rounded form-control_sm"
                placeholder="Поиск"
                type="search"
                v-model.trim="filter.search"
              />
            </div>
          </div>
          <div class="form-group form-group_inline">
            <ui-button-group v-model:view="view" />
          </div>
        </div>
      </div>

      <template v-if="meetups">
        <template v-if="filteredMeetups.length">
          <meetups-list v-if="view === 'list'" :meetups="filteredMeetups" />
          <meetups-calendar v-else-if="view === 'calendar'" :meetups="filteredMeetups" />
        </template>
        <ui-alert v-else >Митапов по заданным условиям не найдено...</ui-alert>
      </template>
      <ui-alert v-else text="Загрузка..." />
    </ui-container>
  `,
});
