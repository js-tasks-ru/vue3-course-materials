<template>
  <div class="accordion">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'UiAccordion',

  props: {
    selected: String,
  },

  emits: ['update:selected'],

  expose: ['selected', 'setSelected'],

  methods: {
    setSelected(value) {
      this.$emit('update:selected', value);
    },
  },
};
</script>

<style scoped>
.accordion {
  border: 2px solid var(--blue-light);
  border-radius: 8px;
  overflow: hidden;
}
</style>
