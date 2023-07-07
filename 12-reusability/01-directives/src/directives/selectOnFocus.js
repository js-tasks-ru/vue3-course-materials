// Храним обработчики событий узлов, на которые установлена директива для их дальнейшего удаления
const handlers = new Map();

// Пользовательская директива описывается объектом с хуками
export const selectOnFocus = {
  // Вызывается, когда DOM элемент с директивой создан, но пустой. Без установки остальных его свойств или обработчиков событий
  created() {},

  // Вызывается перед тем, как узел с директивой монтируется в DOM
  beforeMount() {},

  // Вызывается, когда узел с директивой монтируется в DOM
  mounted(el, { instance, value, oldValue, arg, modifiers, dir }, vnode, oldVNode) {
    const [start, end] = value ?? [0, -1];

    const handler = ($event) => {
      $event.currentTarget.setSelectionRange(start, end);
    };
    // В директивах
    el.addEventListener('focus', handler);
    handlers.set(el, handler);
  },

  // Вызывается перед тем, как компонент, в котором рендерится узел, обновится
  beforeUpdate() {},

  // Вызывается после того, как компонент, в котором рендерится узел, обновился
  updated() {},

  // Вызывается перед удалением узла с директивой в DOM
  unmounted(el) {
    // Вручную установленные обработчики событий удаляем самостоятельно
    el.removeEventListener('focus', handlers.get(el));
    handlers.delete(el);
  },
};
