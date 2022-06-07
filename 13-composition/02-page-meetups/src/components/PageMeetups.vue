<template>
  <ui-container>
    <div class="filters-panel">
      <div class="filters-panel__col">
        <ui-radio-group v-model="filter.date" :options="dateFilterOptions" name="date" />
      </div>

      <div class="filters-panel__col">
        <div class="form-group form-group_inline">
          <div class="input-group input-group_icon input-group_icon-left">
            <div class="input-group__icon">
              <ui-icon icon="search" />
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
          <ui-button-group v-model:view="view" />
        </div>
      </div>
    </div>

    <keep-alive v-if="meetups" include="MeetupsCalendar">
      <component :is="viewComponent" v-if="filteredMeetups.length" :meetups="filteredMeetups" />
      <ui-alert v-else>Митапов по заданным условиям не найдено...</ui-alert>
    </keep-alive>
    <ui-alert v-else>Загрузка...</ui-alert>
  </ui-container>
</template>

<script>
import MeetupsList from '@/components/MeetupsList.vue';
import MeetupsCalendar from '@/components/MeetupsCalendar.vue';
import UiRadioGroup from '@/components/UiRadioGroup.vue';
import UiButtonGroup from '@/components/UiButtonGroup.vue';
import UiContainer from '@/components/UiContainer.vue';
import UiAlert from '@/components/UiAlert.vue';
import UiIcon from './UiIcon.vue';
import { useMeetupsFetch } from '../composables/useMeetupsFetch.js';
import { useMeetupsFilter } from '../composables/useMeetupsFilter.js';
import { computed, ref } from 'vue';

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
    const { meetups } = useMeetupsFetch();
    const { filteredMeetups, filter, dateFilterOptions } = useMeetupsFilter(meetups);

    const view = ref('list');

    const viewComponent = computed(() => {
      const viewToComponents = {
        list: MeetupsList,
        calendar: MeetupsCalendar,
      };
      return viewToComponents[view.value];
    });

    return {
      meetups,
      filter,
      filteredMeetups,
      dateFilterOptions,
      view,
      viewComponent,
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
