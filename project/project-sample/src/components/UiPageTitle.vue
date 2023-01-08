<template>
  <h2 class="title"><slot /></h2>
</template>

<script>
export default {
  name: 'UiPageTitle',
};
</script>

<style scoped>
/* _title.css */
.title {
  font-family: Roboto, sans-serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 37px;
  color: var(--body-color);
  margin: 0 0 32px;
}
</style>
