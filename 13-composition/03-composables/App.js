import { defineComponent, inject, ref } from './vendor/vue.esm-browser.js';
import UserForm from './UserForm.js';
import { TOASTER_KEY } from './plugins/toaster/index.js';
import { formatAsIsoDate, formatAsLocalDate } from './utils/dateFormatters.js';

export default defineComponent({
  name: 'App',

  components: { UserForm },

  // setup - функция сборки экземпляра компонента
  // В ней создаются и возвращаются свойства экземпляра
  setup(props, { attrs, slots, emit }) {
    const date = ref(new Date().getTime());
    const user = ref({
      firstName: 'firstName',
      lastName: 'lastName',
    });

    // Внедряем тостер
    const toaster = inject(TOASTER_KEY);

    const handleSubmit = () => {
      toaster.toast(user.value);
    };

    // Возвращаемый объект - объект со свойствами экземпляра
    return {
      date,
      user,
      handleSubmit,
      formatAsIsoDate,
      formatAsLocalDate,
    };
  },

  template: `
    <div class="container">
      <p>Current time: <time :datetime="formatAsIsoDate(date)">{{ formatAsLocalDate(date) }}</time></p>

      <UserForm v-model:user="user" @submit.prevent="handleSubmit" />

      <pre>{{ user }}</pre>
    </div>`,
});
