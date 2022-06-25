import { defineComponent } from '../vendor/vue.esm-browser.js';

const BADGE_CLASSES = {
  primary: 'badge_primary',
  success: 'badge_success',
};

export default defineComponent({
  name: 'UiBadge',

  props: {
    type: {
      type: String,
      required: false,
      validator: (value) => Object.keys(BADGE_CLASSES).includes(value),
    },
  },

  computed: {
    badgeClass() {
      return BADGE_CLASSES[this.type];
    },
  },

  template: `
    <span class="badge" :class="badgeClass">
      <slot />
    </span>
  `,
});
