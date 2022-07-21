<template>
  <div>{{ meetup.description }}</div>
</template>

<script>
export default {
  name: 'PageMeetupDescription',

  props: {
    meetup: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
