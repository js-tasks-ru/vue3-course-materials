export const modelProxy = (propName = 'modelValue') => ({
  get() {
    return this[propName];
  },

  set(newValue) {
    this.$emit(`update:${propName}`, newValue);
  },
});
