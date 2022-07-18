<!--<template>
  <button @click="$emit('update:count', count + 1)">{{ count }}</button>
</template>-->

<script lang="jsx">
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
    // return h(
    //   'button',
    //   {
    //     onClick: () => this.$emit('update:count', this.count + 1),
    //   },
    //   this.count,
    // );
    return <button onClick={() => this.$emit('update:count', this.count + 1)}>{this.count}</button>;
  },
};
</script>
