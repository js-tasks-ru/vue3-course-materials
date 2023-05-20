import { defineComponent } from '../vendor/vue.esm-browser.js';
import UiBadge from './UiBadge.js';
import UiCard from './UiCard.js';

export default defineComponent({
  name: 'MeetupCard',

  components: {
    UiBadge,
    UiCard,
  },

  props: {
    meetup: {
      type: Object,
      required: true,
    },
  },

  // Здесь вместо методов также можно сделать вычисляемые свойства.
  // Вычисляемые свойства будут оптимальнее, если компонент может ререндериться без изменения даты.
  // Например, если изображение, организатор или место проведения митапа поменяются во время работы приложения.
  // Также компонент с вычисляемыми свойствами будет удобнее отлаживать, значения свойств всегда есть
  // в свойствах компонента.
  // Но вычисляемое свойство потребует чуть больше памяти на хранение значения и watcher-а.
  computed: {
    isoDate() {
      return new Date(this.meetup.date).toISOString().split('T')[0];
    },

    localDate() {
      return new Date(this.meetup.date).toLocaleString(navigator.language, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    },
  },

  // methods: {
  //   formatAsLocalDate(timestamp) {
  //     return new Date(timestamp).toLocaleString(navigator.language, {
  //       year: 'numeric',
  //       month: 'long',
  //       day: 'numeric',
  //     });
  //   },
  //
  //   formatAsIsoDate(timestamp) {
  //     return new Date(timestamp).toISOString().split('T')[0];
  //   },
  // },

  template: `
    <UiCard :cover="meetup.image" class="meetup-card">
      <!-- Элемент <template> с директивой v-slot используется для передачи содержимого (на самом деле шаблона) в слот -->
      <!-- Аргумент - имя слота v-slot:slot-name -->
      <!-- v-slot: сокращается до # -->
      <template #header>
        {{ meetup.title }}
      </template>

      <!-- Слот по умолчанию можно передавать и без <template>, между тегами компонента, как в обычном HTML -->
      <!-- Или не указывать имя слота, используя просто директиву v-slot -->
      <template #default>
        <UiBadge v-if="meetup.organizing" type="success" class="meetup-card__badge">Организую</UiBadge>
        <UiBadge v-if="meetup.attending" type="primary" class="meetup-card__badge">Участвую</UiBadge>

        <ul class="meetup-info">
          <li class="meetup-info__item">
            <img class="meetup-info__icon icon" src="/assets/icons/icon-user.svg" alt="user" />
            {{ meetup.organizer }}
          </li>
          <li class="meetup-info__item">
            <img class="meetup-info__icon icon" src="/assets/icons/icon-map.svg" alt="map" />
            {{ meetup.place }}
          </li>
          <li class="meetup-info__item">
            <img class="meetup-info__icon icon" src="/assets/icons/icon-cal-lg.svg" alt="cal-lg" />
            <time :datetime="isoDate">{{ localDate }}</time>
          </li>
        </ul>
      </template>
    </UiCard>
  `,
});
