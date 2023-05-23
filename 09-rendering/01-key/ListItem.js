import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'ListItem',

  props: {
    item: {
      type: Object,
    },
  },

  data() {
    return {
      // Входной параметр используется только для инициализации компонента.
      // Нет ни отслеживания входного параметра, ни вычисляемого свойства от него.
      value: this.item.value,
    };
  },

  template: '<div>{{ value }}</div>',
});
