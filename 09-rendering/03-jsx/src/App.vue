<script lang="jsx">
import FieldsetComponent from './FieldsetComponent.vue';
import TextDiv from './TextDiv.vue';
import CounterButton from './CounterButton.vue';

export default {
  name: 'App',

  data() {
    return {
      count: 0,
    };
  },

  render() {
    const counterButton = <CounterButton vModel={[this.count, 'count']} />;

    const content = [<TextDiv />, counterButton];

    // В компоненты содержимое лучше передать не срендеренным, а функциями рендеринга содержимого слота
    return h(FieldsetComponent, null, {
      legend: () => 'Example',
      default: () => content
    });
  },
};
</script>
