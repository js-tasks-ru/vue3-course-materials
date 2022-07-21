import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'UiAccordion',

  props: {
    selected: String,
  },

  emits: ['update:selected'],

  expose: ['selected', 'setSelected'],

  methods: {
    setSelected(value) {
      this.$emit('update:selected', value);
    },
  },

  template: `
    <div class="accordion">
      <slot />
    </div>`,
});
