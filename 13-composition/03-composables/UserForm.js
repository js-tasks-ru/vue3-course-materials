import { defineComponent, ref, toRefs, watch } from './vendor/vue.esm-browser.js';
import UiInput from './UiInput.js';

const deepEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b);
const deepClone = (obj) => JSON.parse(JSON.stringify(obj));

export default defineComponent({
  name: 'UserForm',

  components: { UiInput },

  props: {
    user: {
      type: Object,
      required: true,
    },
  },

  emits: [`update:user`],

  setup(props, { emit }) {
    const { user } = toRefs(props);
    const localUser = ref(null);

    watch(
      user,
      () => {
        if (!deepEqual(user, localUser.value)) {
          localUser.value = deepClone(user);
        }
      },
      { immediate: true, deep: true },
    );

    watch(
      localUser,
      () => {
        emit(`update:user`, deepClone(localUser.value));
      },
      { deep: true },
    );
    return {
      localUser,
    };
  },

  template: `
    <form>
      <p>FirstName: <UiInput v-model="localUser.firstName" /></p>
      <p>LastName: <UiInput v-model="localUser.lastName" /></p>
      <p><button>Submit</button></p>
    </form>`,
});
