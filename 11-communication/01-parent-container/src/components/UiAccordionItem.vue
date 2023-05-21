<template>
  <div class="accordion-item">
    <div class="accordion-item__header" tabindex="0" @click="select">{{ title }}</div>
    <div v-show="isOpen" class="accordion-item__content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'UiAccordionItem',

  props: {
    title: String,
    value: String,
  },

  computed: {
    isOpen() {
      return this.value === this.$parent.selected;
    },
  },

  created() {
    if (this.$parent.$options.name !== 'UiAccordion') {
      console.warn('Parent of UiAccordionItem must be UiAccordion');
    }
  },

  methods: {
    select() {
      this.$parent.setSelected(this.value);
    },
  },
};
</script>

<style scoped>
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
