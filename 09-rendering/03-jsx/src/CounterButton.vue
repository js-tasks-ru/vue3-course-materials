<!--<template>
  <button @click="$emit('update:count', count + 1)">{{ count }}</button>
</template>-->

<script>
import { h } from 'vue';

export default {
  name: 'CounterButton',

  props: {
    count: Number,
  },

  emits: {
    'update:count': null,
  },

  render() {
    // <button @click="$emit('update:count', count + 1)">{{ count }}</button>
    return h(
      'button',
      {
        onClick: () => this.$emit('update:count', this.count + 1),
      },
      this.count,
    );
  },
};
</script>
