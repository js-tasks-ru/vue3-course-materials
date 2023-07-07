<template>
  <div class="wrapper">
    <MeetupsHeader />
    <main class="main">
      <PageMeetups />
    </main>
    <MeetupsFooter />
  </div>
</template>

<script>
import PageMeetups from './components/PageMeetups.vue';
import MeetupsHeader from './components/MeetupsHeader.vue';
import MeetupsFooter from './components/MeetupsFooter.vue';

export default {
  name: 'App',

  components: {
    MeetupsHeader,
    MeetupsFooter,
    PageMeetups,
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
