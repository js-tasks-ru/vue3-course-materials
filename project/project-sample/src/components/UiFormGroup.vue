<template>
  <div><slot /> (Task 04-vue-cli/01-UiFormGroup1)</div>
</template>

<script>
// TODO: Task 04-vue-cli/01-UiFormGroup1

export default {
  name: 'UiFormGroup',
};
</script>

<style scoped>
/* _form-group.css */

.form-group {
  position: relative;
  margin-bottom: 24px;
}

.form-group.form-group_inline {
  display: inline-block;
  margin-bottom: 0;
}

.form-group.form-group_inline + .form-group.form-group_inline {
  margin-left: 16px;
}

.form-group__label {
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  color: var(--body-color);
  margin-bottom: 10px;
  display: block;
}
</style>
