<template>
  <Transition name="fade" mode="out-in">
    <slot />
  </Transition>
</template>

<script>
// TODO: Task 03-sfc/04-UiTransition

export default {
  name: 'UiTransitionFade',
};
</script>

<style scoped>
/* _transitions.css */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
