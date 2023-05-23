<template>
  <footer class="footer">
    <UiContainer> &copy; 2020-{{ new Date().getFullYear() }} </UiContainer>
  </footer>
</template>

<script>
import UiContainer from './UiContainer.vue';

export default {
  name: 'MeetupsFooter',
  components: { UiContainer },
};
</script>

<style scoped>
.footer {
  padding: 100px 0 60px;
  text-align: center;
}
</style>
