import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const PageA = defineComponent({
  name: 'PageA',
  template: `<div class="title">Page A</div>`,
});

const PageB = defineComponent({
  name: 'PageB',
  template: `<div class="title">Page B</div>`,
});

const PageC = defineComponent({
  name: 'PageC',
  template: `<div class="title">Page C</div>`,
});

const App = defineComponent({
  name: 'App',

  components: {
    PageA,
    PageB,
    PageC,
  },

  data() {
    return {
      currentPath: location.pathname,
    };
  },

  mounted() {
    window.addEventListener('popstate', this.updateCurrentPath);
  },

  beforeUnmount() {
    window.removeEventListener('popstate', this.updateCurrentPath);
  },

  methods: {
    push(path) {
      this.currentPath = path;
      history.pushState(null, '', this.currentPath);
    },

    updateCurrentPath() {
      this.currentPath = location.pathname;
    },
  },

  template: `
    <div class="wrapper bg-grey">
      <header class="header">
        <h1 class="logo">App</h1>
        <nav class="nav">
          <a href="/A" @click.prevent="push('/A')" class="nav__link">Page A</a>
          <a href="/B" @click.prevent="push('/B')" class="nav__link">Page B</a>
          <a href="/C" @click.prevent="push('/C')" class="nav__link">Page C</a>
        </nav>
      </header>


      <main class="main container">
        <page-a v-if="currentPath === '/A'" />
        <page-b v-else-if="currentPath === '/B'" />
        <page-c v-else-if="currentPath === '/C'" />
        <div v-else>404 - Not Found</div>
      </main>
    </div>
  `,
});

createApp(App).mount('#app');
