<template>
  <footer class="footer">
    <UiContainer>&copy; 2022-{{ new Date().getFullYear() }}</UiContainer>
  </footer>
</template>

<script>
// TODO: Добавить имя автора проекта :)
import UiContainer from './UiContainer.vue';

export default {
  name: 'MeetupsFooter',
  components: { UiContainer },
};
</script>

<style scoped>
/* _footer.css */
.footer {
  padding: 100px 0 60px;
  text-align: center;
}
</style>
