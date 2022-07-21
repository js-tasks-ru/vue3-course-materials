import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'ChildContainer',
  template: `
    <div class="container">
      <slot />
    </div>`,
});
