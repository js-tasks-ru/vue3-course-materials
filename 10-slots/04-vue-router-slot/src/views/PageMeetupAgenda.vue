<template>
  <div>{{ meetup.agenda.length }}</div>
</template>

<script>
export default {
  name: 'PageMeetupAgenda',

  props: {
    meetup: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
