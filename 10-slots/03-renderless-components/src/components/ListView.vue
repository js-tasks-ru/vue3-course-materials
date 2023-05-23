<template>
  <ul>
    <li v-for="(item, index) in localItems">
      <slot :item="item" :index="index" @remove="remove(index)">
        <span>{{ item }}</span>
        <button @click="remove(index)">x</button>
      </slot>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ListView',

  props: {
    items: Array,
  },

  emits: ['update:items'],

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
