import { defineComponent } from './vendor/vue.esm-browser.js';
import UserForm from './UserForm.js';
import { dateFormattersMixin } from './mixins/dateFormattersMixin.js';
import { TOASTER_KEY } from './plugins/toaster/index.js';

export default defineComponent({
  name: 'App',

  components: { UserForm },

  mixins: [dateFormattersMixin],

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

  template: `
    <div>
      <p>Current time: <time :datetime="formatAsIsoDate(date)">{{ formatAsLocalDate(date) }}</time></p>
      <hr>
      <user-form v-model:user="user" @submit.prevent="handleSubmit" />
      <hr>
      <pre>{{ user }}</pre>
    </div>`,
});
