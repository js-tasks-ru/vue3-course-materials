import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'Child',
  template: `<span>My parent is {{ $parent.$options.name }}</span>`,
});
