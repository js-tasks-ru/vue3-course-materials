import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  // Компоненты принято называть как минимум двумя словами, чтобы явно отличаться от HTML элементов.
  // Иногда используют префиксы, например, V (Vue) или App.
  name: 'VClock',

  data() {
    return {
      time: '',
      intervalId: null,
      isWorking: true,
    };
  },

  created() {
    this.updateTime();
    this.intervalId = setInterval(() => {
      this.updateTime();
    }, 1000);
  },

  beforeUnmount() {
    clearInterval(this.intervalId);
  },

  methods: {
    updateTime() {
      if (this.isWorking) {
        this.time = new Date().toLocaleTimeString();
      }
    },
  },

  template: `<div @click="isWorking = !isWorking">{{ time }}</div>`,
});
