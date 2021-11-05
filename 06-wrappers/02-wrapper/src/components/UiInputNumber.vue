<template>
  <ui-input v-model="customModel" type="number" v-bind="$attrs">
    <template v-for="slotName in Object.keys($slots)" #[slotName]>
      <slot :name="slotName" />
    </template>
  </ui-input>
</template>

<script>
import UiInput from './UiInput.vue';
export default {
  name: 'UiInputNumber',

  components: { UiInput },

  inheritAttrs: false,

  props: {
    ...UiInput.props,

    modelValue: {
      type: Number,
    },
  },

  emits: {
    ...UiInput.emits,
    'update:modelValue': null,
  },

  computed: {
    customModel: {
      get() {
        return this.modelValue.toString();
      },

      set(value) {
        this.$emit('update:modelValue', Number(value));
      },
    },
  },
};
</script>

<style></style>
