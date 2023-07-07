import { defineComponent, inject, onBeforeUnmount, onMounted, ref, watch } from './vendor/vue.esm-browser.js';
import UserForm from './UserForm.js';
import { TOASTER_KEY } from './plugins/toaster/index.js';
import { formatAsIsoDate, formatAsLocalDate } from './utils/dateFormatters.js';
import { isMobile } from './utils/isMobile.js';
import { throttle } from './utils/throttle.js';

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

    // Inject toaster + submit
    const toaster = inject(TOASTER_KEY);

    const handleSubmit = () => {
      toaster.toast(user.value);
    };

    // Resize Observer
    const width = ref(undefined);
    const height = ref(undefined);
    // For Template Ref
    const container = ref(null);
    // Реактивность не нужна, просто внутренняя переменная
    let observer = null;

    onMounted(() => {
      observer = new ResizeObserver(() => {
        width.value = container.value.clientWidth;
        height.value = container.value.clientHeight;
      });
      observer.observe(container.value);
    });

    onBeforeUnmount(() => {
      observer.unobserve(container.value);
    });

    // Throttling

    const throttledWidth = ref(undefined);
    const throttledHeight = ref(undefined);
    const throttledSetWidth = throttle((value) => (throttledWidth.value = value), 1000);
    const throttledSetHeight = throttle((value) => (throttledHeight.value = value), 1000);
    watch(width, throttledSetWidth);
    watch(height, throttledSetHeight);

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
