import { defineComponent } from './vendor/vue.esm-browser.js';
import UserForm from './UserForm.js';
import { TOASTER_KEY } from './plugins/toaster/index.js';
import { throttle } from './utils/throttle.js';
import { isMobile } from './utils/isMobile.js'
import { formatAsIsoDate, formatAsLocalDate } from './utils/dateFormatters.js'

export default defineComponent({
  name: 'App',

  isMobile,

  components: { UserForm },

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

      width: undefined,
      height: undefined,

      throttledWidth: undefined,
      throttledHeight: undefined,

      observer: null,
    };
  },

  computed: {
    throttledSetWidth() {
      return throttle((value) => (this.throttledWidth = value), 1000);
    },

    throttledSetHeight() {
      return throttle((value) => (this.throttledHeight = value), 1000);
    },
  },

  watch: {
    width(value) {
      this.throttledSetWidth(value);
    },

    height(value) {
      this.throttledSetHeight(value);
    },
  },

  mounted() {
    this.observer = new ResizeObserver(() => {
      this.width = this.$refs.container.clientWidth;
      this.height = this.$refs.container.clientHeight;
    });
    this.observer.observe(this.$refs.container);
  },

  beforeUnmount() {
    this.observer.unobserve(this.$refs.container);
  },

  methods: {
    // Добавляем утилиты в методы для доступа к ним из шаблона
    formatAsLocalDate,
    formatAsIsoDate,

    handleSubmit() {
      this.toaster.toast(this.user);
    },
  },

  template: `
    <div ref="container" class="container">
      <p>Current time: <time :datetime="formatAsIsoDate(date)">{{ formatAsLocalDate(date) }}</time></p>
      <p>Container size: {{ throttledWidth }} x {{ throttledHeight }}</p>
      <p>Is mobile? {{ $options.isMobile }}</p>
      <UserForm v-model:user="user" @submit.prevent="handleSubmit" />

      <pre>{{ user }}</pre>
    </div>`,
});
