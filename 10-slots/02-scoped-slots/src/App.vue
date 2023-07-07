<script lang="jsx">
import ListView from './components/ListView.vue';

export default {
  components: {
    ListView,
  },

  data() {
    return {
      list: [
        {
          id: 1,
          name: 'Alice',
        },
        {
          id: 2,
          name: 'Bob',
        },
      ],
    };
  },

  render() {
    const renderItem = ({ item, index, remove }) => (
      <button type="button" onClick={() => remove()}>
        {`${index}: ${item.name}`}
      </button>
    );
    return <ListView v-model={[this.list, 'items']} renderItem={renderItem} />;
  },
};
</script>
