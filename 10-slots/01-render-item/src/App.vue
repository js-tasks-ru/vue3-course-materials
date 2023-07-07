<template>
  <ListView v-model:items="list" />
</template>

<script>
import ListView from './components/ListView.vue';

export default {
  components: {
    ListView,
  },

  data() {
    return {
      list: [1, 2, 3, 4, 5],
    };
  },
};
</script>
