<template>
  <span class="root">
    <span class="inside">{{ text }}</span>
  </span>
</template>

<script>
export default {
  name: 'UiText',

  props: {
    text: {
      type: String,
    },

    color: {
      type: String,
      default: 'inherit',
    },
  },
};
</script>

<style>
.inside {
  color: v-bind(color);
}
</style>
