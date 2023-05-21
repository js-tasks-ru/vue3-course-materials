<template>
  <ListView v-slot="{ item, index, onRemove }" v-model:items="list">
    <p>
      <button type="button" @click="onRemove">{{ index }}: {{ item.name }}</button>
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
