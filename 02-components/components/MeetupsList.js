import { defineComponent } from '../vendor/vue.esm-browser.js';
import MeetupCard from './MeetupCard.js';

export default defineComponent({
  name: 'MeetupsList',

  components: {
    MeetupCard,
  },

  props: {
    meetups: {
      type: Array,
      required: true,
    },
  },

  template: `
    <ul class="meetups-list">
      <li v-for="meetup in meetups" :key="meetup.id" class="meetups-list__item">
        <a :href="\`/meetups/\${meetup.id}\`" class="meetups-list__item-link" tabindex="0">
          <MeetupCard :meetup="meetup" />
        </a>
      </li>
    </ul>
  `,
});
