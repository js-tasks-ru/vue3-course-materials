<template>
  <slot :items="localItems" @remove="remove">
    <ul>
      <li v-for="(item, index) in localItems">
        <span>{{ item }}</span>
        <button @click="remove(index)">x</button>
      </li>
    </ul>
  </slot>
</template>

<script>
export default {
  name: 'ListView',

  props: {
    items: Array,
  },

  emits: {
    'update:items': null,
  },

  data() {
    return {
      localItems: [],
    };
  },

  watch: {
    items: {
      deep: true,
      immediate: true,
      handler(newValue) {
        this.localItems = [...newValue];
      },
    },
  },

  methods: {
    remove(index) {
      this.localItems.splice(index, 1);
      this.$emit('update:items', [...this.localItems]);
    },
  },
};
</script>
