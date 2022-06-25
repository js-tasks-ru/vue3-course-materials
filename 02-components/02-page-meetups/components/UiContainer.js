import { defineComponent } from '../vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'UiContainer',

  template: `
    <div class="container">
      <slot />
    </div>`,
});
