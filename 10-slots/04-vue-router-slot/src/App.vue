<template>
  <div class="wrapper">
    <MeetupsHeader />
    <main class="main">
      <RouterView v-slot="{ Component }">
        <KeepAlive v-if="Component" :max="3">
          <component :is="Component" />
        </KeepAlive>
        <UiContainer v-else>
          <UiAlert>Loading...</UiAlert>
        </UiContainer>
      </RouterView>
    </main>
    <MeetupsFooter />
  </div>
</template>

<script>
import MeetupsHeader from './components/MeetupsHeader.vue';
import MeetupsFooter from './components/MeetupsFooter.vue';
import UiContainer from './components/UiContainer.vue';
import UiAlert from './components/UiAlert.vue';

export default {
  name: 'App',

  components: {
    UiContainer,
    UiAlert,
    MeetupsHeader,
    MeetupsFooter,
  },
};
</script>

<style>
@import './assets/styles/_fonts.css';
@import './assets/styles/_variables.css';
@import './assets/styles/_common.css';

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
