<template>
  <div><slot /> (Task 06-wrappers/01-UiLink)</div>
</template>

<script>
// TODO: Task 06-wrappers/01-UiLink

export default {
  name: 'UiLink',
};
</script>

<style scoped>
/* _link.css */
.link {
  color: var(--blue);
  text-decoration: none;
}

.link:hover {
  text-decoration: underline;
}
</style>
