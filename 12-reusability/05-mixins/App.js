import { defineComponent } from './vendor/vue.esm-browser.js';
import UserForm from './UserForm.js';
import { TOASTER_KEY } from './plugins/toaster/index.js';
import { resizeObserverMixin } from './mixins/resizeObserverMixin.js'
import { throttleMixin } from './mixins/throttleMixin.js'

export default defineComponent({
  name: 'App',

  components: { UserForm },

  mixins: [
    // Добавляет:
    // - containerWidth
    // - containerHeight
    // Использует:
    // - $refs.container
    resizeObserverMixin('container'),
    // Добавляет:
    // - throttledWidth
    // Использует:
    // - containerWidth
    throttleMixin('containerWidth', 'throttledWidth'),
    throttleMixin('containerHeight', 'throttledHeight'),
  ],

  inject: {
    toaster: TOASTER_KEY,
  },

  data() {
    return {
      date: new Date().getTime(),
      user: {
        firstName: 'firstName',
        lastName: 'lastName',
      },
    };
  },


  methods: {
    handleSubmit() {
      this.toaster.toast(this.user);
    },
  },

  // В шаблоне функции форматирования дат и утилита isMobile взяты из глобального миксина
  template: `
    <div ref="container" class="container">
      <p>Current time: <time :datetime="formatAsIsoDate(date)">{{ formatAsLocalDate(date) }}</time></p>
      <p>Container size: {{ throttledWidth }} x {{ throttledHeight }}</p>
      <p>Is mobile? {{ isMobile }}</p>
      <UserForm v-model:user="user" @submit.prevent="handleSubmit" />

      <pre>{{ user }}</pre>
    </div>`,
});
