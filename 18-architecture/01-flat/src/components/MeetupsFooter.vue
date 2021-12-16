<template>
  <footer class="footer">
    <ui-container> &copy; 2020-{{ new Date().getFullYear() }} </ui-container>
  </footer>
</template>

<script>
import UiContainer from './UiContainer';

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
