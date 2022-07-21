<template>
  <UiContainer class="page-meetup-form">
    <MeetupForm />
    <hr />
    <button @click="updateMeetup">Update Meetup</button>
    <pre><code>{{ meetup }}</code></pre>
  </UiContainer>
</template>

<script>
import MeetupForm from './components/MeetupForm.vue';
import UiContainer from './components/UiContainer.vue';

function createMeetup() {
  return {
    id: null,
    title: '',
    description: '',
    image: null,
    date: '',
    place: '',
    agenda: [],
  };
}

export default {
  name: 'App',

  components: {
    UiContainer,
    MeetupForm,
  },

  data() {
    return {
      meetup: createMeetup(),
    };
  },

  methods: {
    updateMeetup() {
      this.meetup.title += '!';
      if (this.meetup.agenda.length) {
        this.meetup.agenda[0].title += '!';
      }
    },
  },
};
</script>

<style>
@import './assets/styles/_fonts.css';
@import './assets/styles/_variables.css';
@import './assets/styles/_common.css';
</style>

<style scoped>
.page-meetup-form {
  padding: 70px 0;
}

@media all and (max-width: 992px) {
  .page-meetup-form {
    padding: 48px 0;
  }
}
</style>
