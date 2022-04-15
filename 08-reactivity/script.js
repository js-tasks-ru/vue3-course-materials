import { reactive, computed, watchEffect, watch, ref, toRefs, toRef, toRaw } from './vendor/vue.esm-browser.js';

/*********************
 * Реактивные данные *
 * *******************/

// Некоторый объект
const originalState = {
  user: 'Alice',
  items: ['a', 'b', 'c'],
  set: new Set(),
  map: new Map(),
  date: new Date(),
};

// Реактивный объект, подобный $data в компонентах
const state = reactive(originalState);

// Реактивное значение (реактивная переменная)
const currentItemIndex = ref(0);
// Значение получается и меняется через .value
currentItemIndex.value += 1;

// Вычисляемое свойство (вычисляемое значение)
const currentItem = computed(() => state.items[currentItemIndex.value]);
// Используется - как ref, через .value
// В отличие от computed в компонентах - не ленивый, вычисляется сразу
// currentItem.value === state.items[1] === 'b'

/****************
 * Отслеживание *
 ****************/

// "Классический" watch, как watch в компонентах
watch(
  currentItem,
  (newValue, oldValue) => {
    console.log('Watch on currentItem -----------------------');
    console.log(newValue, oldValue);
    console.log('--------------------------------------------');
  },
  {
    immediate: true,
  },
);

// Нечто между обычным watch и computed
// Некоторое действие (эффект), зависящий от реактивных данных,
// результат которого не возвращаемое значение, а побочные эффекты
watchEffect(() => {
  console.log('Watch Effect -------------------------------');
  console.log('State Keys:', Object.keys(state));
  console.log('Items (as is):', state.items);
  console.log('Items (toRaw):', toRaw(state.items));
  console.log('Current Item Index:', currentItemIndex.value);
  console.log('Current Item:', currentItem.value);
  console.log('Set:', Array.from(state.set));
  console.log('Date (as ISO):', state.date.toISOString());
  console.log('--------------------------------------------');
});

/***********************
 * Потеря реактивности *
 ***********************/

// 1. Изменение оригинального объекта в обход Proxy - не реактивно
// Vue не знает об этом изменении
originalState.items.push('New value');

// 2. Реактивны только Object, Array, Set, Map, WeakSet, WeakMap и их элементы
// Например:
// ArrayBuffer - не реактивный
// Мутация Date - не реактивна
state.date.setDate(1);

// 3. Аккуратнее при деструктуризации реактивного объекта

/****************************************
 * Деструктуризация реактивного объекта *
 ****************************************/

// НЕ РЕАКТИВНО!
// user1 - просто обычная переменная, в которую положили значение из state.user
// user1 и state.user далее никак не связаны и не влияют друг на друга
const { user: user1 } = state;
// Реактивно, но "сложно"
const user2 = computed({
  get: () => state.user,
  set: (value) => (state.user = value),
});
// Реактивно (то же самое, но специальными функциями)
const user3 = toRef(state, 'user');
const { user: user4 } = toRefs(state);

// Для тестирования
watch(user1, (newValue) => console.log('New user1 value:', newValue));
watch(user2, (newValue) => console.log('New user2 value:', newValue));
watch(user3, (newValue) => console.log('New user3 value:', newValue));
watch(user4, (newValue) => console.log('New user4 value:', newValue));

/***************
 * Планировщик *
 ***************/

const a = ref(0);
const b = ref(0);

const sum = computed(() => {
  // (1) Выводится первым, так как значение computed вычисляется для получения sum ниже, где на него повесили watch ниже
  // (7) Второй раз выводится в качестве реакции на изменение a (и b)
  console.log('[computed] sum');
  return a.value + b.value;
});

// -- Ни один из console.log в watch сразу не выводится, так как нет immediate: true

// (6) Первым было изменение A, срабатывает watch
watch(a, () => console.log('[watch (pre)] a'), { flush: 'pre' });
// (3) Выводится сразу после изменения a из-за flush: 'sync'
watch(a, () => console.log('[watch (sync)] a'), { flush: 'sync' });
// (10) После всех реакций (и рендеринга компонента) выполняются flush: 'post' эффекты
watch(a, () => console.log('[watch (post)] a'), { flush: 'post' });

// (9) Аналогично реакция на изменение b, но уже после реакции на изменение A, которая была раньше (watch были раньше)
watch(b, () => console.log('[watch (pre)] b'));

// (!) Здесь ещё до каких-либо изменений устанавливается watch за sum
// (!) Для установки watch Vue требуется понять, зачем следить
// (!) Для этого Vue сделает эффект с функцией () => sum.value и выполнит её
// (!) В процессе выполнения будет обращение к sum, у которого ещё не было вычислено значение,
// (!) что приведёт к его первому вычислению.
// (!) В процессе вычисления будет обращение к A и B
// (!) Так Vue поймёт, что этот watch надо вызывать при изменении A или B
// (8) Реагируем и на изменение sum (на самом деле реагируем на изменение A, который использовался в sum)
watch(sum, () => {
  console.log('[watch (pre)] sum');
});

setTimeout(() => {
  // Здесь добавляется первая задача в очередь микрозадач
  Promise.resolve().then(() => {
    // (5) Начинается выполняться очередь микрозадач и первая задача в ней
    console.log('Resolved Promise');
    // Далее пойдёт выполняться планировщик
  });
  // (2) Первый синхронный лог в таске таймера
  console.log('Start updating A and B');

  // Триггерит отслеживание A - синхронное отслеживание будет выполнено сразу, остальное запланировано в планировщике
  // В том числе вычисление sum
  a.value += 1;

  // Триггерит отслеживание B
  b.value += 1;

  // (4) Следующий синхронный лог
  console.log('Finish updating A and B');
  // В этот момент таска таймера закончилась
  // Позже начнётся выполнение очереди микрозадач, включая планировщик с реакцией на изменение реактивных данных
});

// Try:
// state.items.push("d");
// currentItemIndex.value = 2;
// state.items[currentItemIndex.value] = 'New';
// state.newKey = 'New Value';
// state.set.add('New Value');

window.state = state;
window.originalState = originalState;
window.currentItemIndex = currentItemIndex;
window.currentItem = currentItem;
window.user1 = user1;
window.user2 = user2;
window.user3 = user3;
window.user4 = user4;
