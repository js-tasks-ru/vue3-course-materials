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
      <ViewComponent v-if="filteredMeetups.length" :meetups="filteredMeetups" />
      <UiAlert v-else>Митапов по заданным условиям не найдено...</UiAlert>
    </KeepAlive>
    <UiAlert v-else>Загрузка...</UiAlert>
  </UiContainer>
</template>

<script setup>
import { computed, ref } from 'vue';
import MeetupsList from './MeetupsList.vue';
import MeetupsCalendar from './MeetupsCalendar.vue';
import UiRadioGroup from './UiRadioGroup.vue';
import UiButtonGroup from './UiButtonGroup.vue';
import UiContainer from './UiContainer.vue';
import UiAlert from './UiAlert.vue';
import UiIcon from './UiIcon.vue';
import { useMeetupsFetch } from '../composables/useMeetupsFetch.js';
import { useMeetupsFilter } from '../composables/useMeetupsFilter.js';

// Fetching
const { meetups } = useMeetupsFetch();
// Filtering
const { filter, filteredMeetups, dateFilterOptions } = useMeetupsFilter(meetups);

// View
const view = ref('list');
// Можно вычислить переменную с компонентом, и использовать её как имя тега,
// даже без динамического компонента
const ViewComponent = computed(() => {
  const viewToComponents = {
    list: MeetupsList,
    calendar: MeetupsCalendar,
  };
  return viewToComponents[view.value];
});
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
