<template>
  <div class="accordion">
    <div v-for="option in options" :key="option.value" class="accordion-item">
      <div class="accordion-item__header" tabindex="0" @click="select(option.value)">{{ option.title }}</div>
      <div v-show="option.value === selected" class="accordion-item__content">{{ option.text }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UiAccordion',

  props: {
    options: {
      type: Array,
      required: true,
    },

    selected: {
      type: String,
    },
  },

  emits: ['update:selected'],

  methods: {
    select(value) {
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

.accordion-item {
  border-top: 2px solid var(--blue-light);
}

.accordion-item:first-child {
  border-top: none;
}

.accordion-item__header {
  background: var(--blue-extra);
  cursor: pointer;
  padding: 5px;
}

.accordion-item__content {
  padding: 5px;
}
</style>
