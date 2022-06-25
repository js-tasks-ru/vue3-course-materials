import { defineComponent } from '../vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'UiAlert',

  props: {
    text: {
      type: String,
      default: 'No data',
    },
  },

  template: `
    <div class="alert">
      <!-- Если в слот ничего не передано, будет выводиться строка из входного параметра. -->
      <!-- Так содержимое можно определять, и передавая его как содержимое, и передавая просто текст параметром. -->
      <slot>{{ text }}</slot>
    </div>
  `,
});
