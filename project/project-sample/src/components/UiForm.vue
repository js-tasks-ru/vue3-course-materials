<template>
  <form class="form" @submit.prevent="$emit('submit', $event)">
    <slot />

    <div v-if="$slots.buttons" class="form__buttons">
      <slot name="buttons" />
    </div>

    <div v-if="$slots.append" class="form__append">
      <slot name="append" />
    </div>
  </form>
</template>

<script>
export default {
  name: 'UiForm',

  emits: ['submit'],
};
</script>

<style scoped>
/* _form.css */
.form {
  margin: 0;
}

.form__buttons {
  display: flex;
  flex-direction: column;
  padding: 0 40px;
  margin-top: 40px;
}

.form__append {
  margin-top: 40px;
  text-align: center;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
}
</style>
