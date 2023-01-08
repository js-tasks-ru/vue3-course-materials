<template>
  <TransitionGroup tag="div" name="fade-list" class="fade-list">
    <slot />
  </TransitionGroup>
</template>

<script>
// TODO: Task 03-sfc/04-UiTransition

export default {
  name: 'UiTransitionGroupFade',
};
</script>

<style scoped>
.fade-list {
  position: relative;
}

.fade-list :deep(*) {
  opacity: 1;
  transition: opacity 0.3s ease-out;
}

.fade-list :deep(.fade-list-leave-active) {
  position: absolute !important;
  left: 0;
  right: 0;
}

.fade-list :deep(.fade-list-enter-from),
.fade-list :deep(.fade-list-leave-to) {
  opacity: 0;
}

.fade-list :deep(.fade-list-move) {
  transition: transform 0.3s;
}
</style>
