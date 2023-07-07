import { reactive, set, del, watchEffect } from './vendor/vue2.esm.browser.js';

const data = {
  items: ['a', 'b', 'c'],
  obj: {},
  key: 'value',
  set: new Set(),
};

const state = reactive(data);

console.log('data === state', data === state);

watchEffect(() => {
  console.log(JSON.stringify(state));
});

window.data = data;
window.state = state;

state.items[0] = 'A';

state.obj.newKey = 'value';

delete state.obj.key;

state.set.add('value');
