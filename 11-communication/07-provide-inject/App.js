import { defineComponent } from './vendor/vue.esm-browser.js';
import IndexPage from './IndexPage.js';
import ToasterProvider from './ToasterProvider.js';

export default defineComponent({
  name: 'App',

  components: {
    IndexPage,
    ToasterProvider,
  },

  template: `
    <ToasterProvider>
      <div class="container">
        <IndexPage />
      </div>
    </ToasterProvider>`,
});
