<template>
  <FieldsetComponent>
    <template #legend>Example</template>

    <TextDiv />
    <CounterButton v-model:count="count" />
  </FieldsetComponent>
</template>

<script>
import FieldsetComponent from './FieldsetComponent.vue';
import TextDiv from './TextDiv.vue';
import CounterButton from './CounterButton.vue';

export default {
  name: 'App',

  components: {
    CounterButton,
    TextDiv,
    FieldsetComponent,
  },

  data() {
    return {
      count: 0,
    };
  },
};
</script>
