<script>
import { h } from 'vue';

export default {
  name: 'FieldsetComponent',

  render() {
    // В рендер функциях можно работать с переданным в слот содержимым
    const content = this.$slots.default?.().map((vnode) => h('div', { class: 'fieldset__item' }, vnode));

    return h('fieldset', [
      h('legend', this.$slots.legend?.()),
      content,
    ]);
  },
};
</script>
