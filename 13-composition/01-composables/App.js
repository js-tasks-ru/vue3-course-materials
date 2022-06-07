import { defineComponent, ref } from './vendor/vue.esm-browser.js';
import UserForm from './UserForm.js';
import { useToaster } from './plugins/toaster/index.js';
import { useDateFormatters } from './composables/useDateFormatters.js';

export default defineComponent({
  name: 'App',

  components: { UserForm },

  setup(props, { attrs, slots, emit }) {
    const date = ref(new Date().getTime());
    const user = ref({
      firstName: 'firstName',
      lastName: 'lastName',
    });

    const toaster = useToaster();

    const handleSubmit = () => {
      toaster.toast(user.value);
    };

    const { formatAsIsoDate, formatAsLocalDate } = useDateFormatters();

    // ... сборки компонента
    return {
      // свойства -> свойства экземпляра
      date,
      user,
      handleSubmit,
      formatAsIsoDate,
      formatAsLocalDate,
    };
  },

  template: `
    <div>
      <p>Current time: <time :datetime="formatAsIsoDate(date)">{{ formatAsLocalDate(date) }}</time></p>
      <hr>
      <user-form v-model:user="user" @submit.prevent="handleSubmit" />
      <hr>
      <pre>{{ user }}</pre>
    </div>`,
});
