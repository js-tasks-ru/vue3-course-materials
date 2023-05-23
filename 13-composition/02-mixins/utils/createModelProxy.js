export const createModelProxy = (propName = 'modelValue') => ({
  get() {
    return this[propName];
  },

  set(value) {
    this.$emit(`update:${propName}`, value);
  },
});
