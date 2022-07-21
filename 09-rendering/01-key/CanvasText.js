import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'CanvasText',

  props: {
    text: {
      type: String,
    },
  },

  mounted() {
    // Компонент работает с DOM при монтировании
    // DOM имеет состояние, которое не привязано к данным
    this.draw();
  },

  methods: {
    draw() {
      const FONT_SIZE = 24;
      const canvas = this.$refs['canvas'];
      canvas.height = FONT_SIZE;
      canvas.width = 100;
      const ctx = canvas.getContext('2d');
      ctx.font = `${FONT_SIZE}px sans-serif`;
      ctx.textBaseline = 'bottom';
      ctx.fillText(this.text, 0, FONT_SIZE);
    },
  },

  template: '<canvas ref="canvas" style="display: block;"></canvas>',
});
