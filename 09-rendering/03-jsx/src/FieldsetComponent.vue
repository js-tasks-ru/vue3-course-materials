<script lang="jsx">
export default {
  name: 'FieldsetComponent',

  render() {
    return (
      <fieldset>
        <legend>{this.$slots.legend?.()}</legend>
        {this.$slots.default?.().map((vnode) => (
          <div class="fieldset__item">{vnode}</div>
        ))}
      </fieldset>
    );
  },
};
</script>
