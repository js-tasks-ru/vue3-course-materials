<template>
  <Suspense>
    <template #default>
      <PageMeetups />
    </template>

    <template #fallback>
      <UiContainer>
        <UiAlert>Загрузка...</UiAlert>
      </UiContainer>
    </template>
  </Suspense>
</template>

<script>
import PageMeetups from './components/PageMeetups.vue';
import UiAlert from './components/UiAlert.vue';
import UiContainer from './components/UiContainer.vue';

export default {
  name: 'App',

  components: {
    UiContainer,
    PageMeetups,
    UiAlert,
  },
};
</script>

<style>
@import './assets/styles/_fonts.css';
@import './assets/styles/_variables.css';
@import './assets/styles/_common.css';
</style>
