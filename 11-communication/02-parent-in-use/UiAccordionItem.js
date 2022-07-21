import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'UiAccordionItem',

  props: {
    name: String,
    title: String,
  },

  computed: {
    isOpen() {
      return this.name === this.$parent.selected;
    },
  },

  created() {
    if (this.$parent.$options.name !== 'UiAccordion') {
      throw new Error('Parent of UiAccordionItem must be UiAccordion');
    }
  },

  methods: {
    select() {
      this.$parent.setSelected(this.name);
    },
  },

  template: `
    <div class="accordion-item">
      <h3>
        <button type="button" style="display: block; border: none; background: transparent; color: inherit; font-size: inherit; font-weight: inherit; text-align: inherit; width: 100%; cursor: pointer;" @click="select">{{ title }}</button>
      </h3>
      <div v-show="isOpen">
        <slot />
      </div>
    </div>
  `,
});
