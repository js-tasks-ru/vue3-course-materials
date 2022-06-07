export const createModelProxyMixin = (propName = 'modelValue') => ({
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
