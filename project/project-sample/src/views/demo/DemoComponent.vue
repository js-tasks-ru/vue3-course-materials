<template>
  <div :id="name" class="sample">
    <h3 class="header">
      <UiLink :to="{ hash: `#${name}` }">{{ name }}</UiLink>
    </h3>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script>
import { inject } from 'vue';
import UiLink from '../../components/UiLink.vue';

export default {
  name: 'DemoComponent',
  components: { UiLink },

  props: {
    name: String,
  },

  setup(props) {
    const section = inject('demo:section');
    const registerComponent = inject('demo:register-component');
    registerComponent(section, props.name);
  },
};
</script>

<style scoped>
.sample {
  margin: 2rem 0;
  background: var(--white);
  border: 1px solid var(--blue-light);
  border-radius: 5px;
}

.header {
  background-color: var(--blue-light);
  border-bottom: 1px solid var(--blue-light);
  padding: 0.5rem 1rem;
}

.content {
  padding: 1rem;
}
</style>
