<script lang="jsx">
export default {
  name: 'ListView',

  props: {
    items: Array,
    renderItem: {
      type: Function,
      default: ({ item, index, remove }) => (
        <>
          <span>{item}</span>
          <button onClick={() => remove(index)}>x</button>
        </>
      ),
    },
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

  render() {
    return (
      <ul>
        {this.localItems.map((item, index) => (
          <li>
            {this.renderItem({
              item,
              index,
              remove: this.remove,
            })}
          </li>
        ))}
      </ul>
    );
  },
};
</script>
