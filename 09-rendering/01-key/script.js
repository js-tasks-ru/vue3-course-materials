import { createApp, defineComponent } from './vendor/vue.esm-browser.js';
import ListItem from './ListItem.js';
import CounterButton from './CounterButton.js';
import CanvasText from './CanvasText.js';
import SlowListItem from './SlowListItem.js';
import InputWithoutBinding from './InputWithoutBinding.js';
import ListItemWithCounterButton from './ListItemWithCounterButton.js';

let lastId = 0;
const genId = () => ++lastId;

const App = defineComponent({
  components: {
    ListItem,
    CounterButton,
    CanvasText,
    SlowListItem,
    InputWithoutBinding,
    ListItemWithCounterButton,
  },

  data() {
    return {
      list: [
        { id: genId(), value: 'a' },
        { id: genId(), value: 'b' },
        { id: genId(), value: 'c' },
      ],

      key: 'key',
    };
  },

  methods: {
    rotateList() {
      this.list = this.list.slice(1).concat(this.list[0]);
    },
  },

  template: `
    <fieldset>
      <legend>Without key</legend>
      <div style="display: flex">
        <fieldset>
          <legend>No prop watch</legend>
          <ListItem v-for="item in list" :item="item" />
        </fieldset>

        <fieldset>
          <legend>No prop watch deep</legend>
          <ListItemWithCounterButton v-for="item in list" :name="item.value" />
        </fieldset>

        <fieldset>
          <legend>DOM without binding (input without :value)</legend>
          <InputWithoutBinding v-for="item in list" :text="item.value" />
        </fieldset>

        <fieldset>
          <legend>Complex update with DOM API (canvas)</legend>
          <CanvasText v-for="item in list" :text="item.value" />
        </fieldset>

        <fieldset>
          <legend>Slow prop update</legend>
          <SlowListItem v-for="item in list" :item="item" />
        </fieldset>
      </div>
    </fieldset>

    <fieldset>
      <legend>:key="index"</legend>
      <div style="display: flex">
        <fieldset>
          <legend>No prop watch</legend>
          <ListItem v-for="(item, index) in list" :item="item" :key="index" />
        </fieldset>

        <fieldset>
          <legend>No prop watch deep</legend>
          <ListItemWithCounterButton v-for="(item, index) in list" :name="item.value" :key="index" />
        </fieldset>

        <fieldset>
          <legend>DOM without binding (input without :value)</legend>
          <InputWithoutBinding v-for="(item, index) in list" :text="item.value" :key="index" />
        </fieldset>

        <fieldset>
          <legend>Complex update with DOM API (canvas)</legend>
          <CanvasText v-for="(item, index) in list" :text="item.value" :key="index" />
        </fieldset>

        <fieldset>
          <legend>Slow prop update</legend>
          <SlowListItem v-for="(item, index) in list" :item="item" :key="index" />
        </fieldset>
      </div>
    </fieldset>

    <fieldset>
      <legend>Key</legend>
      <div style="display: flex">
        <fieldset>
          <legend>No prop watch</legend>
          <ListItem v-for="item in list" :item="item" :key="item.id" />
        </fieldset>

        <fieldset>
          <legend>No prop watch deep</legend>
          <ListItemWithCounterButton v-for="item in list" :name="item.value" :key="item.id" />
        </fieldset>

        <fieldset>
          <legend>DOM without binding (input without :value)</legend>
          <InputWithoutBinding v-for="item in list" :text="item.value" :key="item.id" />
        </fieldset>

        <fieldset>
          <legend>Complex update with DOM API (canvas)</legend>
          <CanvasText v-for="item in list" :text="item.value" :key="item.id" />
        </fieldset>

        <fieldset>
          <legend>Slow prop update</legend>
          <SlowListItem v-for="item in list" :item="item" :key="item.id" />
        </fieldset>
      </div>
    </fieldset>

    <hr />

    <button type="button" @click="rotateList">Rotate List</button>

    <hr />

    <input v-model="key" />
    <CounterButton :key="key" />
  `,
});

createApp(App).mount('#app');
