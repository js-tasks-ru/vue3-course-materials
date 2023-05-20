import { defineComponent } from '../vendor/vue.esm-browser.js';
import PageMeetups from './PageMeetups.js';

// Корневой компонент - компонент всего приложения App - единственный компонент,
// для которого допустимо и принято давать имя из одного слова.
export default defineComponent({
  name: 'App',

  components: {
    PageMeetups,
  },

  template: `<PageMeetups />`,
});
