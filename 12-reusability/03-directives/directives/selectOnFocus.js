export const selectOnFocus = {
  // created() {},

  // beforeMount() {},

  mounted(el, { instance, value, oldValue, arg, modifiers, dir }, vnode, oldVNode) {
    const [start, end] = value ?? [0, -1];

    el._selectOnFocusHandler = ($event) => {
      $event.currentTarget.setSelectionRange(start, end);
    };

    el.addEventListener('focus', el._selectOnFocusHandler);
  },

  // beforeUpdate() {},

  // updated() {},

  unmounted(el) {
    el.removeEventListener('focus', el._selectOnFocusHandler);
  },
};
