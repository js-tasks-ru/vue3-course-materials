<!--<template>
  <fieldset>
    <legend>
      <slot name="legend" />
    </legend>

    <slot />
  </fieldset>
</template>-->

<script>
import { h } from 'vue';

export default {
  name: 'FieldsetComponent',

  render() {
    return h('fieldset', [h('legend', this.$slots['legend']?.()), this.$slots['default']?.()]);
  },
};
</script>
