import { defineComponent, ref } from './vendor/vue.esm-browser.js';
import UserForm from './UserForm.js';
import { useToaster } from './plugins/toaster/index.js';
import { formatAsIsoDate, formatAsLocalDate } from './utils/dateFormatters.js';
import { isMobile } from './utils/isMobile.js';
import { throttledRef } from './composables/throttledRef.js';
import { useResizeObserver } from './composables/useResizeObserver.js';

export default defineComponent({
  name: 'App',

  components: { UserForm },

  setup() {
    // Date
    const date = ref(new Date().getTime());

    // Form
    const user = ref({
      firstName: 'firstName',
      lastName: 'lastName',
    });

    // Submit
    const toaster = useToaster();
    const handleSubmit = () => {
      toaster.toast(user.value);
    };

    // Resize Observer
    const container = ref(null);
    const { width, height } = useResizeObserver(container);

    // Throttling
    const throttledWidth = throttledRef(width);
    const throttledHeight = throttledRef(height);

    return {
      // Константа
      isMobile,

      // Date
      date,

      // Form
      user,
      handleSubmit,

      // Container + Resize
      container,
      throttledWidth,
      throttledHeight,

      // Обычные функции вне компонента (= константы)
      formatAsIsoDate,
      formatAsLocalDate,
    };
  },

  template: `
    <div ref="container" class="container">
    <p>Current time: <time :datetime="formatAsIsoDate(date)">{{ formatAsLocalDate(date) }}</time></p>
    <p>Container size: {{ throttledWidth }} x {{ throttledHeight }}</p>
    <p>Is mobile? {{ isMobile }}</p>
    <UserForm v-model:user="user" @submit.prevent="handleSubmit" />

    <pre>{{ user }}</pre>
    </div>`,
});
