import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'ListItem',

  emits: ['input'],

  template: `<div><input @input="$emit('input', $event.target.value)" /></div>`,
});
