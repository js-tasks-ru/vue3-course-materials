<script>
import { h } from 'vue';
import FieldsetComponent from './FieldsetComponent.vue';
import TextDiv from './TextDiv.vue';
import CounterButton from './CounterButton.vue';

export default {
  name: 'App',

  // Регистрация компонентов больше не нужна, компоненты используются напрямую в JS

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

    // В компоненты содержимое лучше передать не срендеренным, а функциями рендеринга содержимого слота
    return h(FieldsetComponent, null, {
      legend: () => 'Example',
      default: () => content
    });
  },
};
</script>
