<script lang="jsx">
export default {
  name: 'CounterButton',

  props: {
    count: Number,
  },

  emits: ['update:count'],

  render() {
    return <button onClick={() => this.$emit('update:count', this.count + 1)}>{this.count}</button>;
  },
};
</script>
