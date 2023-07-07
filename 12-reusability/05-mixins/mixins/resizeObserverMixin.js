// Приватные свойства можно называть так, чтобы они точно не пересеклись с другими свойствами,
// и было понятно, что это свойства конкретного миксина
export const resizeObserverMixin = (container) => ({
  data() {
    return {
      [`$__resizeObserverMixin_observer_${container}`]: null,
      [`${container}Width`]: undefined,
      [`${container}Height`]: undefined,
    };
  },

  mounted() {
    this[`$__resizeObserverMixin_observer_${container}`] = new ResizeObserver(() => {
      this[`${container}Width`] = this.$refs[container].clientWidth;
      this[`${container}Height`] = this.$refs[container].clientHeight;
    });
    this[`$__resizeObserverMixin_observer_${container}`].observe(this.$refs[container]);
  },

  beforeUnmount() {
    this[`$__resizeObserverMixin_observer_${container}`].unobserve(this.$refs[container]);
  },
});
