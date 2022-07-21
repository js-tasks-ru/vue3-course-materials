import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'UiInput',

  props: ['modelValue'],

  emits: ['update:modelValue'],

  computed: {
    modelValueProxy: {
      get() {
        return this.modelValue;
      },

      set(newValue) {
        this.$emit(`update:modelValue`, newValue);
      },
    },
  },

  template: `<input v-model="modelValueProxy" />`,
});
