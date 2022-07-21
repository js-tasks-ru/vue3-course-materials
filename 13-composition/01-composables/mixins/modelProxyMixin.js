export const modelProxyMixin = (propName = 'modelValue') => ({
  computed: {
    [`${propName}Proxy`]: {
      get() {
        return this[propName];
      },

      set(newValue) {
        this.$emit(`update:${propName}`, newValue);
      },
    },
  },
});
