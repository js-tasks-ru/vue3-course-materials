<!--<template>
  <fieldset>
    <legend>
      <slot name="legend" />
    </legend>

    <slot />
  </fieldset>
</template>-->

<script lang="jsx">
export default {
  name: 'FieldsetComponent',

  render() {
    // return h('fieldset', [h('legend', this.$slots['legend']?.()), this.$slots['default']?.()]);
    return (
      <fieldset>
        <legend>{this.$slots['legend']?.()}</legend>
        {this.$slots['default']?.()}
      </fieldset>
    );
  },
};
</script>
