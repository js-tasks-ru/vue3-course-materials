import { reactive, set, del, watchEffect } from './vendor/vue2.esm.browser.js';

const data = {
  items: ['a', 'b', 'c'],
  obj: {},
  key: 'value',
  set: new Set(),
};

const state = reactive(data);

// В Vue 2 объект "превращается" в реактивный без нового Proxy
console.log('data === state', data === state);

watchEffect(() => {
  console.log(JSON.stringify(state));
});

window.data = data;
window.state = state;

// === Не реактивно ===

// Нельзя изменять массивы по индексу
state.items[0] = 'A';

// Нельзя создавать новые поля объектам
state.obj.newKey = 'value';

// Нельзя удалять поля объектов
delete state.obj.key;

// Set, Map - не реактивные
state.set.add('value');

// === Реактивно ===

// Изменение массива методами массива
state.items.splice(1, 1, 'B');

// Использование специальных функций реактивности
set(state.items, 2, 'C');
set(state.obj, 'newKey2', 'value');
del(state.obj, 'newKey2');
