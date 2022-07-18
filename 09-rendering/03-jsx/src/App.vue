<!--<template>
  <FieldsetComponent>
    <template #legend>Example</template>

    <TextDiv />
    <CounterButton v-model:count="count" />
  </FieldsetComponent>
</template>-->

<script lang="jsx">
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
    const counterButton = <CounterButton vModel={[this.count, 'count']} />;

    const content = [<TextDiv />, counterButton];

    return <FieldsetComponent>{{ legend: () => 'Example', default: () => content }}</FieldsetComponent>;
  },
};
</script>
