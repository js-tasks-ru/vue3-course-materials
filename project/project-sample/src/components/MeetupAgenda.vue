<template>
  <div>Task 02-components/05-MeetupAgenda</div>
</template>

<script>
// TODO: Task 02-components/05-MeetupAgenda

export default {
  name: 'MeetupAgenda',

  props: {
    agenda: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
/* _agenda.css */
.agenda {
  margin: 0;
  padding: 0;
  list-style: none;
}

.agenda__item {
  border-top: 1px solid var(--grey-3);
}

.agenda__item:first-child {
  border-top: none;
}
</style>
