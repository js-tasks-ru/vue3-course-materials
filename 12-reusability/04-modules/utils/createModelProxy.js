// Описание вычисляемого свойства можно генерировать и использовать в разных компонентах
export const createModelProxy = (propName = 'modelValue') => ({
  get() {
    return this[propName];
  },

  set(value) {
    this.$emit(`update:${propName}`, value);
  },
});
