<template>
  <div>
    <h2>{{ section }}</h2>
    <slot></slot>
  </div>
</template>

<script>
import { provide } from 'vue';

export default {
  name: 'DemoSection',

  props: {
    section: String,
  },

  setup(props) {
    provide('demo:section', props.section);
  },
};
</script>

<style scoped></style>
