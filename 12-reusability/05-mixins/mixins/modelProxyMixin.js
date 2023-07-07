// Описание одного вычисляемого свойства в миксине описывается, как опция computed
export const modelProxyMixin = {
  computed: {
    modelValueProxy: {
      get() {
        return this.modelValue;
      },

      set(value) {
        this.$emit(`update:modelValue`, value);
      },
    },
  },
};
