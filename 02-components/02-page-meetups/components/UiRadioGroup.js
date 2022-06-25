import { defineComponent } from '../vendor/vue.esm-browser.js';

let id = 0;

export default defineComponent({
  name: 'UiRadioGroup',

  props: {
    options: {
      type: Array,
      required: true,
    },

    modelValue: {
      type: String,
    },

    name: {
      type: String,
      // По умолчанию лучше использовать не фиксированное значение, а случайное (например, с nanoid), или инкрементное.
      // Так компонент можно будет использовать, не указывая явно name.
      default: () => `radio-group-${id++}`,
    },
  },

  emits: ['update:modelValue'],

  template: `
    <div class="radio-group">
      <div v-for="option in options" class="radio-group__button">
        <input
          :id="\`\${$options.name}_\${name}_\${option.value}\`"
          class="radio-group__input"
          type="radio"
          :name="name"
          :value="options.value"
          :checked="option.value === modelValue"
          @input="$emit('update:modelValue', option.value)"
        />
        <label :for="\`\${$options.name}_\${name}_\${option.value}\`" class="radio-group__label">{{ option.text }}</label>
      </div>
    </div>
  `,
});
