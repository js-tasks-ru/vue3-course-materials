<template>
  <MeetupForm :meetup="meetup" />
</template>

<script>
import { ref } from 'vue';
import MeetupForm from '../components/MeetupForm.vue';
import { createMeetup } from '../services/meetupService.js';

export default {
  name: 'PageCreateMeetup',

  components: {
    MeetupForm,
  },

  setup() {
    // TODO: title "Создание митапа | Meetups"
    // TODO: Добавить LayoutMeetupForm
    const meetup = ref(createMeetup());

    // TODO: При сабмите формы создания митапа - добавить его через API и перейти на страницу созданного митапа
    // TODO: При нажатии на "Отмена" вернуться на главную страницу

    return {
      meetup,
    };
  },
};
</script>

<style scoped></style>
