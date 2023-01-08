<template>
  <div class="page-auth">
    <UiContainer>
      <UiPageTitle class="page-auth__title">{{ title }}</UiPageTitle>
      <slot />
    </UiContainer>
  </div>
</template>

<script>
import UiContainer from './UiContainer.vue';
import UiPageTitle from './UiPageTitle.vue';

export default {
  name: 'LayoutAuth',

  components: {
    UiPageTitle,
    UiContainer,
  },

  props: {
    title: String,
  },
};
</script>

<style scoped>
/* _page-auth.css */
.page-auth {
  max-width: 374px;
  width: 100%;
  margin: 0 auto;
  padding: 48px 0;
}

.page-auth__title {
  text-align: center;
}
</style>
