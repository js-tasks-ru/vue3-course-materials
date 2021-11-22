<template>
  <header class="header">
    <meetup-logo />
    <meetup-nav />
  </header>
</template>

<script>
import { defineComponent } from 'vue';
import MeetupLogo from '@/components/MeetupLogo';
import MeetupNav from '@/components/MeetupNav';

export default defineComponent({
  name: 'MeetupHeader',
  components: { MeetupNav, MeetupLogo },
});
</script>

<style scoped>
.header {
  padding: 44px 0 32px;
  background-color: var(--white);
}
</style>
