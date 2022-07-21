<!--<template>
  <FieldsetComponent>
    <template #legend>Example</template>

    <TextDiv />
    <CounterButton v-model:count="count" />
  </FieldsetComponent>
</template>-->

<script>
import { h } from 'vue';
import FieldsetComponent from './FieldsetComponent.vue';
import TextDiv from './TextDiv.vue';
import CounterButton from './CounterButton.vue';

export default {
  name: 'App',

  // components: {
  //   CounterButton,
  //   TextDiv,
  //   FieldsetComponent,
  // },

  data() {
    return {
      count: 0,
    };
  },

  render() {
    const counterButton = h(CounterButton, {
      count: this.count,
      'onUpdate:count': ($event) => {
        this.count = $event;
      },
    });

    const content = [h(TextDiv), counterButton];

    return h(FieldsetComponent, null, { legend: () => 'Example', default: () => content });
  },
};
</script>
