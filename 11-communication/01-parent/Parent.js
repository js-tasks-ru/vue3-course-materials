import { defineComponent } from './vendor/vue.esm-browser.js';
import Child from './Child.js';
import ChildContainer from './ChildContainer.js';

export default defineComponent({
  name: 'Parent',

  components: {
    Child,
    ChildContainer,
  },

  template: `
    <ChildContainer>
      <Child />
    </ChildContainer>`,
});
