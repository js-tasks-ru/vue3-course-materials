<template>
  <button @click="$emit('update:count', count + 1)">{{ count }}</button>
</template>

<script>
export default {
  name: 'CounterButton',

  props: {
    count: Number,
  },

  emits: {
    'update:count': null,
  },
};
</script>
