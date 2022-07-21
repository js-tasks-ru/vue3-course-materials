<template>
  <fieldset>
    <legend>
      <slot name="legend" />
    </legend>

    <slot />
  </fieldset>
</template>

<script>
export default {
  name: 'FieldsetComponent',
};
</script>
