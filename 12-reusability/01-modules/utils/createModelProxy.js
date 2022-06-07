export const createModelProxy = (propName = 'modelValue') => ({
  get() {
    return this[propName];
  },

  set(newValue) {
    this.$emit(`update:${propName}`, newValue);
  },
});
