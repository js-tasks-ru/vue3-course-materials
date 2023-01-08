<template>
  <div class="wrapper">
    <MeetupsHeader />
    <main class="main">
      <slot />
    </main>
    <MeetupsFooter />
  </div>
</template>

<script>
import MeetupsHeader from './MeetupsHeader.vue';
import MeetupsFooter from './MeetupsFooter.vue';

export default {
  name: 'LayoutBase',

  components: {
    MeetupsHeader,
    MeetupsFooter,
  },
};
</script>

<style scoped>
.wrapper {
  background-color: var(--grey-light);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main {
  flex: 1 0 auto;
}
</style>
