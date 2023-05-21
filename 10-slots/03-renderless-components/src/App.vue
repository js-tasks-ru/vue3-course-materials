<template>
  <ListView v-slot="{ items, onRemove }" v-model:items="list">
    <p v-for="(item, index) in items">
      <button type="button" @click="onRemove(index)">{{ index }}: {{ item.name }}</button>
    </p>
  </ListView>
</template>

<script>
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
};
</script>
