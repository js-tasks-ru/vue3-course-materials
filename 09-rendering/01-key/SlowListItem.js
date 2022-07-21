import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'SlowListItem',

  props: {
    item: {
      type: Object,
    },
  },

  data() {
    return {
      value: undefined,
    };
  },

  watch: {
    item: {
      immediate: true,
      deep: true,
      handler() {
        // Есть отслеживание входного параметра, но его обновление - медленное.
        // Аналогичная проблема будет, если компонент медленно ререндерится.
        this.updateValue();
      },
    },
  },

  methods: {
    updateValue() {
      const timeout = Math.round(Math.random() * 1000);
      setTimeout(() => {
        this.value = this.item.value;
      }, timeout);
    },
  },

  template: '<div>{{ value }}</div>',
});
