<template>
  <span class="root">
    <span class="inside" :class="insideClasses">{{ text }}</span>
  </span>
</template>

<script>
export default {
  name: 'UiTextCssModule',

  props: {
    text: {
      type: String,
    },

    color: {
      type: String,
      default: 'inherit',
    },

    insideClasses: {
      type: [String, Object, Array],
    }
  },
};
</script>

<style module>
.inside {
  color: v-bind(color);
}
</style>
