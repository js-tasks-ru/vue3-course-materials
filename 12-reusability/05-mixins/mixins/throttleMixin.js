import { throttle } from '../utils/throttle.js'

export const throttleMixin = (property, throttledProperty) => ({
  data() {
    return {
      [throttledProperty]: undefined,
    };
  },

  computed: {
    [`$__throttledMixin_set_${property}`]() {
      return throttle((value) => (this[throttledProperty] = value), 1000);
    },
  },

  watch: {
    [property](newValue) {
      this[`$__throttledMixin_set_${property}`](newValue);
    },
  },
});
