<template>
  <div class="container">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'UiContainer',
};
</script>

<style scoped>
/* _container.css */
.container {
  max-width: 1008px;
  width: 100%;
  margin: 0 auto;
}

@media all and (max-width: 992px) {
  .container {
    padding: 0 16px;
  }
}
</style>
