<template>
  <span class="root">
    <span class="deep">{{ text }}</span>
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
.deep {
  color: v-bind(color);
}
</style>
